import express from 'express';
import { checkAvailability, signUp, signIn, adminSignUp, adminSignIn } from '../controllers/user.controller.js';
import { userAuth } from '../middleware/userAuth.middleware.js';
import { emailValidationRules, validate } from '../utils/validate.js';
const userRouter = express.Router();

userRouter.post("/user/signup", emailValidationRules, validate, signUp)
userRouter.post("/admin/signup", adminSignUp)
userRouter.post("/user/signin", signIn)
userRouter.post("/admin/signin", adminSignIn)
userRouter.get('/availability', userAuth, checkAvailability);

export default userRouter