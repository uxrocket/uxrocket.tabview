/**
 * Turkcell UXITD
 * jQuery based tab switcher
 * @author Kursad Yildirmak
 */

;(function($){
    var ux, // local shorthand

        defaults = {
            button      : '.tab-view-button',
            content     : '.tab-view-content',
            current     : 'current',
            toggleClass : 'tab-view-toggle',
            hoverClass  : 'tab-view-hover',

            hashLink    : false,
            toggled     : false,
            hover       : false,
            onChange    : false
        };

    // constructor method
    var TabView = function(el, options, modal){
        var opts = $.extend({}, defaults, options, $(el).data()),

        // cached variables
            $tabview = $(el),
            $buttons = $tabview.find(opts.button),
            $content = $tabview.find(opts.content),
            $modal = modal,
            $event = 'click';

        if($tabview.hasClass(opts.toggleClass)){
            opts.toggled = true;
        }

        if($tabview.hasClass(opts.hoverClass)){
            $event = 'mouseenter mouseleave';
        }

        if(opts.hashLink === true && window.location.hash) {
            $buttons.removeClass('current');
            $content.removeClass('current');
            var hash = location.hash;
            $(hash).addClass('current');
            $buttons.filter('[href="' + hash + '"]').addClass('current');
        }

        $(el).on($event , opts.button , function(e){

            if(typeof $(this).attr('href') !== typeof undefined && $(this).attr('href') !== false && opts.hashLink === false ) {
                e.preventDefault();
            }

            e.stopPropagation();

            var currentIndex = $(this).index(),
                onChange = $(this).data('onChange');

            //set class to parent if button has role attribute
            if (typeof $(this).attr('role') != 'undefined') {
                var role = $(this).attr('role'),
                    classes = $tabview.attr('class').split(" ");
                $tabview.removeClass(classes.pop());
                $tabview.addClass(role);
            }

            //set toggle mode if parent has tab-view-toggled class
            if(opts.toggled){
                var $this =  $(this).closest($tabview).find(opts.button);
                currentIndex =$this.index(this);
                $buttons.not($this.eq(currentIndex)).removeClass(opts.current);
                $content.not($content.eq(currentIndex)).removeClass(opts.current);
                $content.eq(currentIndex).toggleClass(opts.current);
                $this.eq(currentIndex).toggleClass(opts.current);
            }else{
                $buttons.removeClass(opts.current);
                $content.removeClass(opts.current);
                $content.eq(currentIndex).addClass(opts.current);
                $(this).addClass(opts.current);
            }

            if($modal) {
                $.uxmodal.resize();
            }

            callback(onChange);
        });
    };

    // global callback
    var callback = function(fn){
        // if callback string is function call it directly
        if(typeof fn === 'function'){
            call(fn);
        }

        // if callback defined via data-attribute, call it via new Function
        else {
            if(fn !== false){
                var func = new Function('return ' + fn);
                func();
            }
        }
    };

    // jquery bindings
    ux = $.fn.tabview = $.uxtabview = $.uxrtabview = function(options){
        return this.each(function(){
            var $el = $(this),
                tabview,
                modal = false;

            if(!$el.hasClass('.tab-view')){
                $el.addClass('tab-view');
            }

            //uxitd-modal plugin resize trigger if tab sizes different each other
            if($el.closest('#colorbox').hasClass('uxitd-modal')){
                modal = true;
            }

            if($el.hasClass('uxitd-tabview-ready')){
                return;
            }

            $el.addClass('uxitd-tabview-ready');
            tabview = new TabView(this, options , modal);
        });
    };

    // Version
    ux.version = "0.4.0";

    // settings
    ux.settings = defaults;

})(jQuery);