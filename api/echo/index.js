// Classic Functions style: set context.res to send the HTTP response
module.exports = async function (context, req) {
  // Expect JSON body like { "text": "hello" }
  const body = req.body || {};
  const text = typeof body.text === 'string' ? body.text.trim() : '';

  if (!text) {
    context.res = {
      status: 400,
      headers: { "Content-Type": "application/json" },
      body: { error: "Please send JSON with a 'text' property." }
    };
    return;
  }

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: {
      youSent: text,
      length: text.length,
      serverTime: new Date().toISOString()
    }
  };
};
