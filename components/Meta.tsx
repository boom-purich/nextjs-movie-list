import Head from 'next/head';

const Meta = ({title,keyword,description}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width,initial-scale=1'/>
            <meta name="keywords" content={keyword}/>
            <meta name="description" content={description}/>
            <meta charSet='utf-8'/>
            <link rel='icon' href="/movie_list_logo.ico"/>
            <title>{title}</title>
        </Head>
    );
}

Meta.defaultProps = {
    title: 'Movie List',
    keyword: 'Find your favorite movies.',
    description: 'Website keep all movie data.',
}

export default Meta;
