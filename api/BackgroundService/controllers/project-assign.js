const ejs = require("ejs");

const db = require("../database");
const { sendMail } = require("../helpers/email");

module.exports = {
  run: async () => {
    const items = await db.query(
      "SELECT * from dbo.project_assign_email_queue where active = 1"
    );
    for (let item of items.recordset) {
      let project = await db.exec("getProject", {
        project_id: item.project_id,
      });
      let user = await db.exec("getUser", { userId: item.user_id });
      project = project.recordset[0];
      user = user.recordset[0];
      ejs.renderFile(
        "templates/projectEmail.ejs",
        {
          name: user.first,
          project_name: project.name,
          description: project.description,
        },
        async (err, data) => {
          if (err) return console.log(err);
          const message = {
            from: {
              name: "User System",
              address: process.env.FROM_EMAIL,
            },
            to: user.email,
            subject: "Assigned Project",
            html: data,
          };
          try {
            if (item.active) {
              await sendMail(message);
              await db.query(
                "UPDATE dbo.project_assign_email_queue set active = 0 where id = '" +
                  item.id +
                  "'"
              );
              console.log(`Project Assignment Email sent to ${user.email}`);
            }
          } catch (error) {
            console.log(`Couldn't send email to ${user.email}`, error.message);
          }
        }
      );
    }
  },
};
