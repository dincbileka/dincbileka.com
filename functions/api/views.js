export async function onRequestGet(context) {
  const { env } = context;
  const key = "page_views";

  const current = parseInt((await env.PAGE_VIEWS.get(key)) || "0", 10);
  const next = current + 1;

  await env.PAGE_VIEWS.put(key, next.toString());

  return new Response(JSON.stringify({ views: next }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
