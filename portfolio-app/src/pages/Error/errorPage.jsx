import Button from '../../components/Button/Button';

function ErrorPage() {
    return (
        <>
            <div className="page-title-container">
                <h1>404 : ERROR</h1>
            </div>
            <div className="page-content">
                <h2>
                    Either you shouldn't be here or something wrong happened.
                </h2>
                <h3>I invite you to go back to the homepage.</h3>
            </div>
            <Button href="/" variant="back-home">
                Back to homepage
            </Button>
        </>
    );
}

export default ErrorPage;
