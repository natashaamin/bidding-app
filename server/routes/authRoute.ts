import { Router } from 'express';
import * as authController from '../controllers/authController';
import passport from 'passport';

const router = Router();

router.post('/login', passport.authenticate('local', {
    session: false,
    failWithError: true
})
,authController.login,
// error handling
(err: any, req: any, res: any, next: any) => {
    return res.status(200).json({ 
        code: "ACCESS_DENIED",
        message: 'Invalid username or password'
     });
});


export default router;
