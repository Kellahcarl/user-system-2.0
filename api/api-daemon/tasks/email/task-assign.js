const db = require("../../database");
const { sendMail } = require("../helpers/email");
module.exports = async () => {
  const items = await (
    await db.query(
      "SELECT * from dbo.project_assign_email_queue where active = 1"
    )
  ).recordset;

  for (let item of items) {
    const user = await (
      await db.query(
        "SELECT * from dbo.users where _id = '" + item.user_id + "'"
      )
    ).recordset[0];
    const project = await (
      await db.query(
        "SELECT * from dbo.projects where _id = '" + item.project_id + "'"
      )
    ).recordset[0];
    const ejs = require("ejs");
    ejs.renderFile(
      "templates/projectEmail.ejs",
      {
        name: user.first,
        email: user.email,
        pid: project._id,
      },
      async (err, data) => {
        if (err) return console.log(err);
        const message = {
          from: {
            name: "User System",
            address: process.env.FROM_EMAIL,
          },
          to: user.email,
          subject: "Registration Success",
          html: data,
        };
        try {
          await sendMail(message);
          await db.query(
            "UPDATE dbo.registration_email_queue set active = 0 where id = '" +
              item.id +
              "'"
          );
          console.log("Email sent");
        } catch (error) {
          console.log(error.message);
        }
      }
    );
  }
};
