export default function auth({next, router}) {
    console.log('auth middleware');
    return next();
}