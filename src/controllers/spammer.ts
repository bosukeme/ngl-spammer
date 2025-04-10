import { Request, Response, NextFunction } from 'express';
import sendNGLMessage from '../services/spammers';
import { spamFormSchema } from '../middlewares/formValidator';


export const homePage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    try {
        const successMessage = req.flash('success') || [];
        const errorMessage = req.flash('error') || [];
        res.render('index', { title: 'Hello NGL Spammer', successMessage, errorMessage });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const sendSpamMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    try {

        const {error, value} = spamFormSchema.validate(req.body);

        if (error) {
          req.flash('error', error.details[0].message);
          return res.redirect('/');
        }

        const { spamNumber, nglName, textInput } = value;
        await sendNGLMessage(Number(spamNumber), nglName, textInput);
        req.flash('success', 'Form submitted successfully!');
    } catch (error: any) {
        req.flash('error', error.message || 'Something went wrong');
    } finally {
        res.redirect('/');
    }
};
