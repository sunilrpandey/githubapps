module.exports = app => {
  // Your code here
  app.log("Yay! The a  pp was loaded!");

  // example of probot responding 'Hello World' to a new issue being opened
  app.on("issues.opened", async context => {
    // `context` extracts information from the event, which can be passed to
    // GitHub API calls. This will return:
    //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
    const params = context.issue({ body: "He    llo GH    App!" });

    // Post a comment on the issue
    return context.github.issues.createComment(params);
  });
};
