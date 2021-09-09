import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Visit Counter Blog Using NextJS and MongoDB</strong>
                        <p>In this post we'll learn how to create a Blog with NextJS, using MongoDB to manage a hit counter on each post and display it on the home page preview.</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Visit Counter Blog Using NextJS and MongoDB</strong>
                        <p>In this post we'll learn how to create a Blog with NextJS, using MongoDB to manage a hit counter on each post and display it on the home page preview.</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Visit Counter Blog Using NextJS and MongoDB</strong>
                        <p>In this post we'll learn how to create a Blog with NextJS, using MongoDB to manage a hit counter on each post and display it on the home page preview.</p>
                    </a>
                </div>
            </main>
        </>
    );
}