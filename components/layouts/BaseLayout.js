import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = props => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    cannonical
  } = props;
  const headerType = props.headerType || "default";
  const title = props.title || "Chris Carr Portfolio";
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="My name is Chris Carr and I am an experienced software engineer and freelance developer. I have several years of experience working in the IT field
          working on a wide range of technologies and projects, from
          JavaScript and Python development to creating mobile and web
          applications in React and Django. Throughout my career, I have acquired advanced technical
          knowledge and the ability to explain programming concepts to
          non-technical audiences. Having worked in governmental,
          corporate, and freelance positions, both in office and
          remotely, I have developed excellent communication and self
          organization skills, being able to work with minimal super
          vision and completing tasks on my own or in a team
          environment."
        />
        <meta
          name="keywords"
          content="carr portfolio, carr developer, carr freelancig, carr programming"
        />
        <meta
          property="og:title"
          content="Chris Carr - programmer, developer, bloger"
        />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is Chris Carr and I am an experienced software engineer and freelance developer."
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        {cannonical && (
          <link
            rel="cannonical"
            href={`${process.env.BASE_URL}${cannonical}`}
          />
        )}
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
