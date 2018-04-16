import passport from 'passport';
import TwitterStrategy from 'passport-twitter';

import User from '../models/userModel';

export default app => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });

  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: '/auth/twitter/callback',
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ twitterId: profile.id });

        if (existingUser) {
          done(null, existingUser);
        } else {
          const user = await User.create({ twitterId: profile.id });
          done(null, user);
        }
      }
    )
  );

  app.get(
    '/auth/twitter',
    passport.authenticate('twitter', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
