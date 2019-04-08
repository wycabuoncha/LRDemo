//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Mon Apr  8 19:15:33 2019
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// CHANGES MADE ...

function Action()
{
	web.setSocketsOption('SSL_VERSION', 'TLS1.2');

	web.addHeader('Upgrade-Insecure-Requests', 
		'1');

	web.url(
		{
			name : 'blazedemo.com', 
			url : 'http://blazedemo.com/', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : '', 
			snapshot : 't1.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : '/favicon.ico'}
			]
		}
	);

	return 0;
}

