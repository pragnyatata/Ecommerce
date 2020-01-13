exports.userSignupValidator = (req, res) => {
  req.check("name", "Name is required").nonEmpty();
  req
    .check("email", "Email must be a valid one")
    .matches(/.+@.+\../)
    .withMessage("Email must contain @")
    .isLength({
      min: 4,
      max: 32
    });
  req
    .check("password", "Password is required")
    .nonEmpty()
    .isLength({ min: 6 })
    .withMessage("password must have atleast 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map(error => console.error.message)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
