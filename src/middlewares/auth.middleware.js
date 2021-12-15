export default function auth({next, router}) {
    return next();
    if (!localStorage.getItem('token')) {
        return router.push({name: 'auth-login'});
    }
    return next();
}