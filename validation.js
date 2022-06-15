function linkValidation(link) {
  try {
    const url = new URL(link);

    if ("www.youtube.com" === url.host || "m.youtube.com" === url.host) {
      if (url.searchParams.has("v")) {
        return true;
      }
    }
    if ("youtu.be" === url.host && url.pathname != "") {
      return true;
    }
  } catch (err) {
    return false;
  }

  return false;
}

module.exports = { linkValidation };
