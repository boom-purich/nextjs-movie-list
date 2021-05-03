import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head/>
                <body>
                    <Main />
                    <NextScript />
                    <script src="/scripts/jquery-3.5.1.slim.min.js" />
                    <script src="/scripts/popper.min.js" />
                    <script src="/bootstrap-4.6.0/dist/js/bootstrap.min.js" />
                </body>
            </Html>
        )
    }
}

export default MyDocument