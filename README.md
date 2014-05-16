## Click-to-Call for Revere Calling

# Instructions

Put form with whatever bits of optional you want in the page.

Place the javascript in your script file or within inline script tags at the bottom of your html page before the `</body>` tag.



The `campaign_line` input should have all ten digits of your phone number in it:

	<input type="hidden" name="campaign_line" value="8003334444" id="campaign_line">



The `revmsghtml` input can have an optional redirect value in it.

    <input type="hidden" name="revmsghtml" value="domain.com/calls/thanks">

If you want everyone redirected to the success URL, set:

    <input type="hidden" id="always_redirect" value="false">

to "true":

    <input type="hidden" id="always_redirect" value="true">

By default, only users without javascript who happen to be submitting the embedded form will get the redirect.