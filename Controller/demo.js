const get = async (req, res) => {
  try {
    res.status(200).send({
      message: "hello world call is successfully",
    });
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = {
  get,
};
