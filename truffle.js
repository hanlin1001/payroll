module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "10.194.97.9:7545",
      port: 7545,
      network_id: "*" // Match any network id
    }
  }
};
