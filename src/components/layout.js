import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Loader, Nav, Social, Email, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const useBodyClassChangeListener = callback => {
  useEffect(() => {
    const body = document.body;
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          callback(mutation.target.className);
        }
      });
    });

    observer.observe(body, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, [callback]);
};

const saveThemeToLocalStorage = theme => {
  localStorage.setItem('isDarkMode', theme);
};

const getThemeFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('isDarkMode') === 'true';
  }
  return true;
};

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  const [isDarkMode, setIsDarkMode] = useState(getThemeFromLocalStorage());
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const bodyClassName = useMemo(() => (isDarkMode ? 'dark-theme' : 'light-theme'), [isDarkMode]);

  useEffect(() => {
    document.body.className = bodyClassName;
    saveThemeToLocalStorage(isDarkMode);
  });

  useBodyClassChangeListener(className => {
    if (!className || className === '') {
      document.body.className = bodyClassName;
      saveThemeToLocalStorage(isDarkMode);
    }
  });

  return (
    <>
      <Head />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <a className="skip-to-content" href="#content">
            Skip to Content
          </a>

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
