//  DONE: Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="' + $(this.val() + '"]')).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
      /* DONE: If the select box changes to an option that has a value, we should:
      [x]1. Hide all of the articles
      [x]2. Fade in only the articles that match based on on the author
      that was aselected. Hint: use an attribute selector to find
      those articles that match the value, and then fade them in.
      */
    /* Otherwise, we should:
        1. Show all the articles except the template */
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  /* DONE: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this.val() + '"]')).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
    /* DONE
      [x]1. Hide all of the .tab-content sections
      [x]2. Fade in the single .tab-content section that is
        associated with the .tab element's data-content attribute.
    */
  });
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  // Truncate logic to show only first two elements within the article body.
  $('.article-body *:nth-of-type(n+2)').hide();
  $('.read-on').on('click', 'a', function(event) {
    event.preventDefault(function(){
      if ($('a .read-on').text().val() === 'Read On') {
        $('.article-body').show();
        $('a .read-on').text('Show Less');
      } else {
        $('.article-body *:nth-of-type(n+2)').hide();
        $('a .read-on').text('Read On');
      }
    });
  });
  /* TODO: Add a delegated event handler to reveal the remaining paragraphs.
    When a .read-on link is clicked, we can:
    [x]1. Prevent the default action of a link.
    [x]2. Reveal everything in that particular article now.
    [X]3. Hide that read-on link!

    // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
  */
};

// DONE: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();
