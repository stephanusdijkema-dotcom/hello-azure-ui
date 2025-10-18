module.exports = async function (context, req) {
  const name =
    (req.query && req.query.name) ||
    (req.body && req.body.name) ||
    "friend";

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: {
      message: `Hello, ${name}!`,
      time: new Date().toISOString()
    }
  };
};
