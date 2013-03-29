(function() {

  $(document).ready(function() {
    $('#revmsg-CallSignupForm').attr('action', 'javascript:void(0);');
    return $('#revmsg-CallSignupForm').submit(function() {
      var info;
      info = {
        phone: $('#phone').val(),
        campaign_line: $('#campaign_line').val()
      };
      if ($('#name').length > 0 && $('#name').val() !== '') {
        info.name = $('#name').val();
      }
      if ($('#zip').length > 0 && $('#zip').val() !== '') {
        info.zip = $('#zip').val();
      }
      if ($('#email').length > 0 && $('#email').val() !== '') {
        info.email = $('#email').val();
      }
      $.getJSON('http://calling.revmsg.net/outgoing/?callback=?', info, function(data) {
        if (data.err) {
          $('#revmsg-click-to-call #revmsg-CallSignupForm .err').html(data.message);
          return $('#revmsg-click-to-call #revmsg-CallSignupForm .err').show();
        } else {
          $('#revmsg-click-to-call .success').html(data.message);
          return $('#revmsg-click-to-call .success').show();
        }
      });
      return false;
    });
  });

}).call(this);
