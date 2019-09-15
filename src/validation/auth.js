import { check } from 'express-validator';

export default {
  signupSchema: [
    check('firstName')
      .trim()
      .exists().withMessage('Name is required')
      .isLength({ min: 2, max: 15 })
      .withMessage('Name should be between 2 to 15 characters')
      .isAlpha()
      .withMessage('Name should only contain alphabets'),

    check('email')
      .trim()
      .exists().withMessage('Email address is required')
      .isEmail()
      .withMessage('Enter a valid email address')
      .customSanitizer((email) => email.toLowerCase()),

    check('password')
      .trim()
      .exists().withMessage('Password is required')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password should be between 8 to 15 characters'),

    check('mobileNumber')
      .trim()
      .exists().withMessage('Mobile Number is required')
      .isMobilePhone()
      .withMessage('Enter a valid mobile phone number')
  ],

  signinSchema: [
    check('email')
      .trim()
      .exists().withMessage('Email address is required')
      .isEmail()
      .withMessage('Enter a valid email address')
      .customSanitizer((email) => email.toLowerCase()),

    check('password')
      .trim()
      .exists().withMessage('Password is required')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password should be between 8 to 15 characters'),
  ]
};
