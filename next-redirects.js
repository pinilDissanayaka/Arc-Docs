async function redirects() {
  return [
    {
      source: "/docs",
      destination: "/docs/overview",
      permanent: true,
    },
  ];
}

module.exports = redirects;
