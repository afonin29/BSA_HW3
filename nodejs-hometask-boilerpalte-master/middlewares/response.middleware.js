const responseMiddleware = (req, res, next) => {
    if (res.err) {
        res.status(400).json({ error: true, message: res.err.message })
      }
      if (res.data) {
        res.status(200).json(res.data)
      }
    next()
}

exports.responseMiddleware = responseMiddleware;