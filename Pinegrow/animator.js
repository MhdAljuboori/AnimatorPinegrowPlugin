/*
Created by Mohammed Aljuboori for Pinegrow Web Editor
Licensed under MIT license
Feel free to use the code in your own Pinegrow plugins
Website http://mhdaljuboori.me
Twitter @MhdAljuboori
 */

$(function() {
  //Wait for Pinegrow to wake-up
  $("body").one("pinegrow-ready", function(e, pinegrow) {

    var animationOptions = [
      {key: 'bounce', name: 'bounce'},
      {key: 'flash', name: 'flash'},
      {key: 'pulse', name: 'pulse'},
      {key: 'rubberBand', name: 'rubberBand'},
      {key: 'shake', name: 'shake'},
      {key: 'swing', name: 'swing'},
      {key: 'tada', name: 'tada'},
      {key: 'wobble', name: 'wobble'},
      {key: 'jello', name: 'jello'},
      {key: 'bounceIn', name: 'bounceIn'},
      {key: 'bounceInDown', name: 'bounceInDown'},
      {key: 'bounceInLeft', name: 'bounceInLeft'},
      {key: 'bounceInRight', name: 'bounceInRight'},
      {key: 'bounceInUp', name: 'bounceInUp'},
      {key: 'bounceOut', name: 'bounceOut'},
      {key: 'bounceOutDown', name: 'bounceOutDown'},
      {key: 'bounceOutLeft', name: 'bounceOutLeft'},
      {key: 'bounceOutRight', name: 'bounceOutRight'},
      {key: 'bounceOutUp', name: 'bounceOutUp'},
      {key: 'fadeIn', name: 'fadeIn'},
      {key: 'fadeInDown', name: 'fadeInDown'},
      {key: 'fadeInDownBig', name: 'fadeInDownBig'},
      {key: 'fadeInLeft', name: 'fadeInLeft'},
      {key: 'fadeInLeftBig', name: 'fadeInLeftBig'},
      {key: 'fadeInRight', name: 'fadeInRight'},
      {key: 'fadeInRightBig', name: 'fadeInRightBig'},
      {key: 'fadeInUp', name: 'fadeInUp'},
      {key: 'fadeInUpBig', name: 'fadeInUpBig'},
      {key: 'fadeOut', name: 'fadeOut'},
      {key: 'fadeOutDown', name: 'fadeOutDown'},
      {key: 'fadeOutDownBig', name: 'fadeOutDownBig'},
      {key: 'fadeOutLeft', name: 'fadeOutLeft'},
      {key: 'fadeOutLeftBig', name: 'fadeOutLeftBig'},
      {key: 'fadeOutRight', name: 'fadeOutRight'},
      {key: 'fadeOutRightBig', name: 'fadeOutRightBig'},
      {key: 'fadeOutUp', name: 'fadeOutUp'},
      {key: 'fadeOutUpBig', name: 'fadeOutUpBig'},
      {key: 'flipInX', name: 'flipInX'},
      {key: 'flipInY', name: 'flipInY'},
      {key: 'flipOutX', name: 'flipOutX'},
      {key: 'flipOutY', name: 'flipOutY'},
      {key: 'lightSpeedIn', name: 'lightSpeedIn'},
      {key: 'lightSpeedOut', name: 'lightSpeedOut'},
      {key: 'rotateIn', name: 'rotateIn'},
      {key: 'rotateInDownLeft', name: 'rotateInDownLeft'},
      {key: 'rotateInDownRight', name: 'rotateInDownRight'},
      {key: 'rotateInUpLeft', name: 'rotateInUpLeft'},
      {key: 'rotateInUpRight', name: 'rotateInUpRight'},
      {key: 'rotateOut', name: 'rotateOut'},
      {key: 'rotateOutDownLeft', name: 'rotateOutDownLeft'},
      {key: 'rotateOutDownRight', name: 'rotateOutDownRight'},
      {key: 'rotateOutUpLeft', name: 'rotateOutUpLeft'},
      {key: 'rotateOutUpRight', name: 'rotateOutUpRight'},
      {key: 'hinge', name: 'hinge'},
      {key: 'rollIn', name: 'rollIn'},
      {key: 'rollOut', name: 'rollOut'},
      {key: 'zoomIn', name: 'zoomIn'},
      {key: 'zoomInDown', name: 'zoomInDown'},
      {key: 'zoomInLeft', name: 'zoomInLeft'},
      {key: 'zoomInRight', name: 'zoomInRight'},
      {key: 'zoomInUp', name: 'zoomInUp'},
      {key: 'zoomOut', name: 'zoomOut'},
      {key: 'zoomOutDown', name: 'zoomOutDown'},
      {key: 'zoomOutLeft', name: 'zoomOutLeft'},
      {key: 'zoomOutRight', name: 'zoomOutRight'},
      {key: 'zoomOutUp', name: 'zoomOutUp'},
      {key: 'slideInDown', name: 'slideInDown'},
      {key: 'slideInLeft', name: 'slideInLeft'},
      {key: 'slideInRight', name: 'slideInRight'},
      {key: 'slideInUp', name: 'slideInUp'},
      {key: 'slideOutDown', name: 'slideOutDown'},
      {key: 'slideOutLeft', name: 'slideOutLeft'},
      {key: 'slideOutRight', name: 'slideOutRight'},
      {key: 'slideOutUp', name: 'slideOutUp'}
    ]

    //Create new Pinegrow framework object
    var f = new PgFramework("AnimatorPlugin", "Animator");

    //Don't show these files in CSS tab
    f.ignore_css_files = [/animate/i];

    //Auto detect if font-awesome css is included
    f.detect = function(pgPage) {
      return pgPage.hasScript(/animator.js/);
    }

    function updateAnimationStyle (pgel, animationSettings, value) {
      var elmStyle = pgel.attr('style');

      if (elmStyle) {
        var ie = new RegExp(animationSettings+"\\:\\s*([0-9]*\\.?[0-9]*m?s?[a-z]*);", "i");
        var webkit = new RegExp("-webkit-"+animationSettings+"\\:\\s*([0-9]*\\.?[0-9]*m?s?[a-z]*);", "i");

        if (elmStyle.match(ie)) {
          if (value)
            elmStyle = elmStyle.replace(ie, animationSettings+':'+value+';');
          else
            elmStyle = elmStyle.replace(ie, '');
        }
        else
          elmStyle += animationSettings+'\:'+value+'\;';

        if (elmStyle.match(webkit)){
          if (value)
            elmStyle = elmStyle.replace(webkit, '-webkit-'+animationSettings+':'+value+';');
          else
            elmStyle = elmStyle.replace(webkit, '');
        }
        else
          elmStyle += '-webkit-'+animationSettings+'\:'+value+'\;';

        pgel.attr('style', elmStyle);
      }
      else {
        pgel.attr('style', animationSettings+'\:'+value+'\;-webkit-'+animationSettings+'\:'+value+'\;');
      }
    }

    function getAnimationStyleValue (pgel, animationSettings) {
      var elmStyle = pgel.attr('style');
      if (elmStyle) {
        var ie = new RegExp(animationSettings+"\\:\\s*([0-9]*\\.?[0-9]*m?s?[a-z]*);", "i");

        var matched = elmStyle.match(ie);
        if (matched)
          return matched[1];
        else
          return '';
      }
      else
        return '';
    }

    var everything = new PgComponentType('animator.everything', 'Element');
    everything.selector = function($el) { return true };
    everything.display_name = 'tag';
    everything.not_main_type = true;
    everything.sections = {
      'animator.everything.animationSettings': {
        name: 'Animation Settings',
        fields : {
          'animator.everything.animationDuration' : {
            type : 'text',
            name: 'Animation Duration',
            action: 'custom',
            live_update: false,
            get_value: function(obj) {
              var $el = obj.data;
              var pgel = new pgQuery($el);

              return getAnimationStyleValue(pgel, 'animation-duration');
            },
            set_value: function(obj, value, values, oldValue, eventType) {
              var $el = obj.data;
              var pgel = new pgQuery($el);
              updateAnimationStyle(pgel, "animation-duration", value);
              return value;
            }
          },
          'animator.everything.animationDelay' : {
            type : 'text',
            name: 'Animation Delay',
            action: 'custom',
            live_update: false,
            get_value: function(obj) {
              var $el = obj.data;
              var pgel = new pgQuery($el);

              return getAnimationStyleValue(pgel, 'animation-delay');
            },
            set_value: function(obj, value, values, oldValue, eventType) {
              var $el = obj.data;
              var pgel = new pgQuery($el);

              updateAnimationStyle(pgel, "animation-delay", value);
              return value;
            }
          },
          'animator.everything.animationItrationCount' : {
            type : 'text',
            name: 'Animation Iteration Count',
            action: 'custom',
            live_update: false,
            get_value: function(obj) {
              var $el = obj.data;
              var pgel = new pgQuery($el);

              return getAnimationStyleValue(pgel, 'animation-iteration-count');
            },
            set_value: function(obj, value, values, oldValue, eventType) {
              var $el = obj.data;
              var pgel = new pgQuery($el);

              updateAnimationStyle(pgel, "animation-iteration-count", value);
              return value;
            }
          }
        }
      }
    };
    f.addComponentType(everything);

    function refreshThePage ($el, propName) {
      var tempArr = propName.split('-');
      var i = parseInt(tempArr[tempArr.length-1]);

      var pgel = new pgQuery($el.data);
      var page = pinegrow.getSelectedPage();

      var trigger = pgel.attr('data-animation-trigger-' + i);

      if (trigger && trigger == "scroll") {
        var dir = pgel.attr('data-animation-scroll-direction-'+i);
        var tar = pgel.attr('data-animation-target-'+i);
        var off = pgel.attr('data-animation-offset-'+i);
        if (dir && tar && off) {

          var toAdd = pgel.attr('data-animation-type-' + i);
          var toRemove = pgel.attr('data-animation-to-remove-' + i);

          if (toAdd || toRemove)
            page.refresh();
        }
      }
      else if (trigger) {
        var toAdd = pgel.attr('data-animation-type-' + i);
        var toRemove = pgel.attr('data-animation-to-remove-' + i);

        if (toAdd || toRemove)
          page.refresh();
      }
    }

    var componentsArray = [];
    for (var i = 1; i <= 4; i++) {
      var a = new PgComponentType('animation-'+i, 'Animation ' + i);
      a.selector = "[data-animation-" + i + "]";
      a.attribute = 'data-animation-' + i;
      a.sections = {};
      a.sections['animation-'+i] = {
        name: ' ',
        fields: {}
      }
      var fields = a.sections['animation-'+i]['fields'];
      fields['animation.general-section-label-'+i] = {
        type : 'label',
        name : 'General',
        action : "element_attribute",
        attribute: 'general-section-label-'+i
      };
      fields['animation.trigger-'+i] = {
        name: 'Animation trigger',
        type: 'select',
        action: 'element_attribute',
        live_update: true,
        show_empty: true,
        options: [
          {key: 'load', name: 'Load'},
          {key: 'click', name: 'Click'},
          {key: 'hover', name: 'Hover'},
          {key: 'scroll', name: 'Scroll'}
        ],
        attribute : 'data-animation-trigger-' + i,
        on_changed : function ($el, page) {
          refreshThePage($el, page);
        }
      }

      fields['animation.animation-type-'+i] = {
        type : 'select',
        name : 'Animation type',
        live_update: true,
        show_empty: true,
        options: animationOptions,
        action: 'element_attribute',
        attribute : 'data-animation-type-' + i,
        on_changed : function ($el, page) {
          refreshThePage($el, page);
        }
      };
      fields['animation-one.animation-to-remove-'+i] = {
        type : 'select',
        name : 'Animation to remove',
        live_update: true,
        show_empty: true,
        options: animationOptions,
        action: 'element_attribute',
        attribute : 'data-animation-to-remove-' + i,
        on_changed : function ($el, page) {
          refreshThePage($el, page);
        }
      }

      a.sections['animation.scroll-'+i] = {
        name: ' ',
        fields: {}
      };
      fields = a.sections['animation.scroll-'+i]['fields'];
      fields['animation.scroll-label-'+i] = {
        type : 'label',
        name : 'Scroll Properties',
        action : "element_attribute",
        attribute: 'scroll-section-label-'+i
      };
      fields['animation.scroll-trigger.direction-'+i] = {
        type : 'select',
        name : 'Scroll direction',
        live_update: true,
        show_empty: true,
        options: [
          {key: 'down', name: 'Down'},
          {key: 'up', name: 'Up'}
        ],
        action: 'element_attribute',
        attribute : 'data-animation-scroll-direction-'+i,
        on_changed : function ($el, page) {
          refreshThePage($el, page);
        }
      };
      fields['animation.scroll-trigger.target-'+i] = {
        type : 'text',
        live_update: false,
        name : 'Scroll target',
        action: 'element_attribute',
        attribute : 'data-animation-target-'+i,
        on_changed : function ($el, page) {
          refreshThePage($el, page);
        }
      };
      fields['animation.scroll-trigger.offset-'+i] = {
        type : 'text',
        live_update: false,
        name : 'Scroll offset',
        action: 'element_attribute',
        attribute : 'data-animation-offset-'+i,
        on_changed : function ($el, page) {
          refreshThePage($el, page);
        }
      };

      componentsArray[i-1] = a;
    }

    //Tell Pinegrow about the framework
    pinegrow.addFramework(f);

    var section = new PgFrameworkLibSection('animations', 'Animations');
    section.setComponentTypes(componentsArray);


    var libsection = new PgFrameworkLibSection("AnimatorPinegrowPlugin_lib", "Components");

    //Pass components in array
    libsection.setComponentTypes([]);

    f.addLibSection(libsection);
    f.addActionsSection(section);

    f.on_plugin_activated = function(pgPage) {
      if(!f.detect(pgPage)) {
        //FA CSS is not included
        var animator_url = "https://cdn.rawgit.com/MhdAljuboori/6ea3a3fa48248e3a132a/raw/animator.js";
        pgPage.addScript(animator_url, true);
        pinegrow.showQuickMessage('Animator JS was added to the page');

        var animate_css = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css";
        pinegrow.showAlert('<p>Looks like that <b>Animate CSS</b> is not included on the page.</p><p>Do you want to add Animate CDN stylesheet to the page?</p><p><code>&lt;link rel="stylesheet" href="' + animate_css + '"&gt;</code></p><p>You can also use <b>Page -&gt; Manage stylesheets</b> to manually include local or remote CSS file.</p>', "Add Animate stylesheet", "Don\'t add it", "Add the CSS", null, function() {
          pgPage.addStylesheet(animate_css);
          pinegrow.showQuickMessage('Animate CSS was added to the page');
        });

        var waypoints_url = "https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js";
        pinegrow.showAlert('<p>Looks like that <b>Waypoints</b> is not included on the page.</p><p>Do you want to add Waypoints CDN javascript file to the page?</p><p><code>&lt;script type="text/javascript" src="' + waypoints_url + '"&gt;&lt;/script&gt;</code></p><p>You can also use <b>Page -&gt; Manage stylesheets</b> to manually include local or remote JS file.</p>', "Add Waypoints", "Don\'t add it", "Add the JS", null, function() {
          pgPage.addScript(waypoints_url, true);
          pinegrow.showQuickMessage('Waypoints was added to the page');
        });
      }
    }
  });
});
