module.exports = app => {
    app.use("/", require("./index.routes"))
    app.use("/", require("./validated-form.routes"))
}