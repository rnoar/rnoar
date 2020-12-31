/* eslint-disable */

export default ({ app }) => {
    /*
     ** Only run on client-side and only in production mode
     */
    if (process.env.NODE_ENV !== 'production')
      return /*
       ** Include Google Analytics Script
       */
    ;(function () {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-6MSWZRHBDD');
    })()
  }