import './../../bundle';

// Code libs and plugins
import { globalEventone } from '../../Plugins/eventone.js';
import { getCookie } from '../../Plugins/cookie.js';

globalEventone();

import './../../Blocks/order/order';

class Order {
   constructor($orderElement) {
      this.$element = $orderElement;
      this.id = $orderElement[0].dataset.id;

      this._bindActions();
      this._bindHandlers();
   }

   _bindActions() {
      const $el = this.$element;
      $el.find('.order__button_reject').on('click', action('click: order button reject'));
      $el.find('.order__button_finish').on('click', action('click: order button finish'));
      $el.find('.order__button_take').on('click', action('click: order button take'));
   }
   _bindHandlers() {
      const target = callback => this._isTargetOrder(callback);
      when('click: order button take', target(e => this.to('my', e)));
      when('click: order button reject', target(e => this.to('other', e)));
      when('click: order button finish', target(e => this.finish(e)));
   }

   _find(selector) {
      return this.$element.find('.order__' + selector);
   }

   _isTargetOrder(callback) {
      const self = this;
      return e => {
         if ($(e.target).parents('.order')[0] == self.$element[0]) callback(e);
      };
   }

   _sectionOtherPlaceholdify(sectionName) {
      sectionName = sectionName == 'my' ? 'other' : 'my';
      const $section = Order.sections['$' + sectionName];
      const $placeholder = $section.find('.section__placeholder');
      
      if ($section[0].children.length > 1) {
         $placeholder.hide();
      } else {
         $placeholder.show();
      }
   }

   _sectionAppend(sectionName, child) {
      const $section = Order.sections['$'+sectionName];
      const $placeholder = $section.find('.section__placeholder');

      $section[0].append(child);

      if ($section[0].children.length > 1) {
         $placeholder.hide();
      } else {
         $placeholder.show();
      }
   }

   async to(type, e) {
      let self = this;

      function assignHtml(selector) {
         $myEl.find('.order__'+selector).html(self._find(selector).html());
      }
      function assignAttr(selector, attrName) {
         $myEl.find('.order__'+selector).attr(attrName, self._find(selector).attr(attrName));
      }

      console.log(await this.ajax(e));

      const $myEl = Order.templates['$'+type].clone();
      assignHtml('address');
      assignHtml('customer-name');
      assignHtml('customer-phone');
      assignAttr('customer-phone', 'href');
      assignHtml('comment');

      this.$element.remove();
      this.$element = $myEl;

      this._sectionAppend(type, $myEl[0]);
      this._sectionOtherPlaceholdify(type);

      this._bindActions();
   }

   async ajax(e) {
      return await fetch(e.target.dataset.ajax, {
         method: 'post',
         body: Object.entries({
            id_order: this.id,
            id: getCookie('vpj_id'),
         }).map(([key, val]) => `${key}=${val}`).join('&'),
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      }).then(res => res.text());
   }

   async finish(e) {
      console.log('hello');
      console.log(await this.ajax(e));
      this.$element[0].remove();
   }
}

$(document).ready(() => {
   Order.templates = {
      $my: $(document.getElementById('tpl-my').content.firstElementChild),
      $other: $(document.getElementById('tpl-other').content.firstElementChild),
   };
   Order.sections = {
      $my: $('#section-my'),
      $other: $('#section-other'),
   };

   const orders = [];

   $('.order').each((i, order) => {
      orders.push(new Order($(order)));
   });

   orders[0]._sectionOtherPlaceholdify('my');
   orders[0]._sectionOtherPlaceholdify('other');

   console.log(Order.templates);
});