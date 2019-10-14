(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid h-100\">\r\n    <div class=\"row esp-header\" *ngIf=\"showHead\">\r\n        <div class=\"col-12 text-right main-nav\">\r\n            <button class=\"float-left esp-breadcrumb\"><i class=\"material-icons\">\r\n                    menu\r\n                </i></button>\r\n            <a href=\"#/searchSupplier\">EIT Dashboard</a>\r\n\r\n            <a href=\"\" class=\"dropdown\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"><i class=\"material-icons\">\r\n                    account_circle\r\n                </i>\r\n                <!-- Hello James\r\n                    NQ: Commented out and will be added back when user api returns this info  -->\r\n            </a>\r\n            <div class=\"dropdown-menu\">\r\n                <button class=\"logout-but\" (click)=\"logout()\"> Logout</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n\r\n</section>\r\n<!--<section class=\"esp-footer left pt-2\">\r\n    <div class=\"col-8 mx-auto\">\r\n        <h6>Have questions?</h6>\r\n       <a href=\"#\" class=\"mr-2\">Product Support</a>\r\n       <a href=\"#\">Feedback</a>\r\n   \r\n   \r\n    </div>\r\n    \r\n</section>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"loginAsiSeo()\" #seoForm=\"ngForm\" class=\"h-100\">\r\n    <div *ngIf=\"isLoading\" class=\"progress-img d-flex text-center\">\r\n        <img src=\"assets/images/esp-loader-genreal.gif\" class=\"justify-content-center align-self-center mx-auto\">\r\n    </div>\r\n    <section class=\"container-fluid h-100 esplogin-form\">\r\n        <div class=\"row h-100\">\r\n            <div class=\"col-12 col-lg-5 col-sm-12 login-cont border-right bg-md-gray\">\r\n                <div class=\"col-9 text-right pb-5 mt-3\">\r\n                    <img src=\"./assets/esp.png\">\r\n                </div>\r\n                <div *ngIf=\"(error && error == 'Your login credentials are invalid. Please review the information and try again.')\r\n                                    && !(asiNumber.invalid || username.invalid || password.invalid)\">\r\n                    <span class=\"error text-danger\" id=\"loginMsg\">\r\n                        <i class=\"material-icons\">info</i>&nbsp;<strong>\r\n                            Your login credentials are invalid.</strong> Please review the information and try\r\n                        again. If you need further assistance, visit our <a\r\n                            href=\"https://www.asicentral.com/asp/open/CustomerSupport/support.aspx?menu=top&amp;id=2379\"\r\n                            target=\"_blank\">Knowledge Base</a>.\r\n                    </span>\r\n                </div>\r\n                <div *ngIf=\"error && error == 'Input string was not in a correct format.'\">\r\n                    <span class=\"error text-danger\" id=\"loginMsg\">\r\n                        <i class=\"material-icons\">info</i>\r\n                        ASI Number is not valid\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-5 p-0 p-sm-0 p-lg-4 esp-login-form float-right\">\r\n                    <div class=\"form-group\">\r\n                        <label>ASI Number</label>\r\n                        <div class=\"input-group mb-2\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <div class=\"input-group-text\">ASI/</div>\r\n                            </div>\r\n\r\n                            <input [(ngModel)]=\"loginSeo.Asi\" #asiNumber=\"ngModel\" required autoFocus type=\"text\"\r\n                                class=\"form-control\" placeholder=\"\" name=\"asiNumber\" autocomplete=\"off\">\r\n                        </div>\r\n                        <div *ngIf=\"asiNumber.invalid && (asiNumber.dirty || asiNumber.touched)\"\r\n                            class=\"error text-danger\">\r\n                            <div *ngIf=\"asiNumber.errors.required\">\r\n                                <i class=\"material-icons\">info</i> ASI Number is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Username</label>\r\n                        <input [(ngModel)]=\"loginSeo.Username\" #username=\"ngModel\" required type=\"text\"\r\n                            class=\"form-control\" placeholder=\"Username\" name=\"username\" autocomplete=\"off\">\r\n                        <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"error text-danger\">\r\n                            <div *ngIf=\"username.errors.required\">\r\n                                <i class=\"material-icons\">info</i> Username is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Password</label>\r\n                        <input [(ngModel)]=\"loginSeo.Password\" #password=\"ngModel\" required type=\"password\"\r\n                            class=\"form-control\" name=\"password\" autocomplete=\"off\">\r\n                        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"error text-danger\">\r\n                            <div *ngIf=\"password.errors.required\">\r\n                                <i class=\"material-icons\">info</i> Password is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"custom-control custom-checkbox my-1 mr-sm-2 ml-4\">\r\n                        <input [(ngModel)]=\"rememberPreference\" name=\"rememberPreference\" type=\"checkbox\"\r\n                            class=\"custom-control-input\" id=\"rememberPreference\">\r\n                        <label class=\"custom-control-label label-light\" for=\"rememberPreference\">Remember Me</label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn-blue my-1\" [disabled]=\"!seoForm.form.valid\">Login</button>\r\n                    </div>\r\n                    <a href=\"\" class=\"esp-link\">Need a license?</a> <a class=\"esp-link\">|</a><a href=\"\"\r\n                        class=\"esp-link\"> Trouble logging in?</a>\r\n                    <label class=\"label-light\">Product Support (800) 546-1350</label>\r\n                </div>\r\n                <div class=\"login-footer\">\r\n                    <div class=\"col-11\">     <img src=\"./assets/asiLogo-login.png\"></div>\r\n                    <div class=\"col-11\">© 2019, The Advertising Specialty Institute®. All Rights Reserved.</div>\r\n               \r\n                  \r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-12 col-sm-12 col-lg-3 bg-gray border-right\">\r\n                <h5 class=\"pb-2  pt-lg-5 pt-sm-1 pt-1 mt-lg-5 mt-1 mt-sm-1\">Messages</h5>\r\n                <div class=\"row border-bottom pb-3\">\r\n                    <div class=\"col-12\">\r\n\r\n                        <label class=\"date\">12/12/2014</label>\r\n                        <p>Display your updates in 'Real-time' using ESP Updates. </p>\r\n                        <a href=\"\">Learn more</a>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"row border-bottom pb-3\">\r\n                    <div class=\"col-12\">\r\n\r\n                        <label class=\"date\">12/12/2014</label>\r\n                        <p>Display your updates in 'Real-time' using ESP Updates. </p>\r\n                        <a href=\"\">Learn more</a>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"row border-bottom pb-3\">\r\n                    <div class=\"col-12\">\r\n\r\n                        <label class=\"date\">12/12/2014</label>\r\n                        <p>Display your updates in 'Real-time' using ESP Updates. </p>\r\n                        <a href=\"\">Learn more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-lg-4 col-sm-12 bg-gray\">\r\n                <h5 class=\"pb-2  pt-lg-5 pt-sm-1 pt-1 mt-lg-5 mt-1 mt-sm-1\">Popular Support Articles</h5>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/bulk-edit-modal/bulk-edit-modal.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/bulk-edit-modal/bulk-edit-modal.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"modal-header esp-modal-header\">\r\n        <h4 class=\"modal-title\">Bulk Edit Options</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <label class=\"date\">Apply Bulk Edit To:</label>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"form-check form-check-inline pr-3\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"product-option\" id=\"allProducts\" value=\"AP\" checked>\r\n            <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                ALL Products (1000)\r\n            </label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline pr-3\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"product-option\" id=\"allfiltered\" value=\"AFP\">\r\n            <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                ALL Filtered Products (200)\r\n            </label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"product-option\" id=\"selectedProducts\" value=\"SP\"\r\n                disabled>\r\n            <label class=\"form-check-label\" for=\"exampleRadios3\">\r\n                Selected Products (5)\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <div class=\"dropdown\">\r\n            <button class=\"btn esp-btn-white my-1 mr-2 p-1 dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                Set Product SEO Status\r\n            </button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                <a class=\"dropdown-item\" [routerLink]=\"\">Ready for SEO</a>\r\n                <a class=\"dropdown-item\" [routerLink]=\"\">Needs Approval</a>\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn esp-btn-white my-1 mr-2 p-1\">Email</button>\r\n        <button type=\"submit\" class=\"btn btn-blue my-1 mr-2 p-1\">Approve SEO </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/clear-all-modal/clear-all-modal.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/clear-all-modal/clear-all-modal.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header esp-modal-header\">\r\n    <h4 class=\"modal-title\">{{title}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body pt-0\">\r\n    <div class=\"col-12 col-md-12 col-lg-12  float-left p-0\">\r\n        <div class=\"d-block email-supplier-form py-2\">\r\n            <label class=\"label-strong\">{{message}}</label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer py-2\">\r\n    <button type=\"submit\" class=\"btn btn-blue my-1\" (click)=\"close()\">Cancel</button> &nbsp;\r\n    <button type=\"submit\" class=\"btn btn-blue my-1\" (click)=\"clearKeywords()\">OK</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/email-supplier-modal/email-supplier-modal.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/email-supplier-modal/email-supplier-modal.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header esp-modal-header\">\r\n  <h4 class=\"modal-title\">Email Supplier</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body pt-0\" [hidden]=\"selectedTemplate\">\r\n  <label class=\"date\">Please select any Template:</label>\r\n  <div class=\"clearfix\"></div>\r\n  <div>\r\n    <button type=\"button\" (click)=\"selectTemplate(welcome)\" class=\"btn btn-blue my-1 mr-2 p-1\">Welcome</button>\r\n    <button type=\"button\" (click)=\"selectTemplate(rfr)\" class=\"btn btn-blue my-1 mr-2 p-1\">Ready for\r\n      Review </button>\r\n    <button type=\"button\" (click)=\"selectTemplate(complete)\" class=\"btn btn-blue my-1 mr-2 p-1\">SEO\r\n      Complete</button>\r\n    <button type=\"button\" (click)=\"selectTemplate(other)\" class=\"btn btn-blue my-1 mr-2 p-1\">Other</button>\r\n  </div>\r\n</div>\r\n<div [hidden]=\"!selectedTemplate\">\r\n  <form #emailSupplierForm=\"ngForm\" (ngSubmit)=\"send(emailSupplierForm)\" novalidate>\r\n    <div class=\"modal-body pt-0\">\r\n      <div class=\"col-12 col-md-12 col-lg-12  float-left p-0\">\r\n        <div class=\"d-block email-supplier-form py-2\">\r\n          <div class=\"col-9 p-0\">\r\n            <div class=\"form-group mb-2\">\r\n              <span class=\"d-flex justify-content-between\">\r\n                <label class=\"label-light \">To</label>\r\n                <a [routerLink]=\"\" (click)=\"clearAll('TO')\">Clear all</a>\r\n              </span>\r\n              <input type=\"text\" pattern=\"^(\\s?[^\\s,]+@[^\\s,]+\\.[^\\s,]+\\s?,)*(\\s?[^\\s,]+@[^\\s,]+\\.[^\\s,]+)$\" required\r\n                [(ngModel)]=\"emailSupplier.To\" #emailTo=\"ngModel\" name=\"emailTo\" class=\"form-control form-control-lg\">\r\n              <div *ngIf=\"emailTo.dirty && emailTo.invalid\">\r\n                <div *ngIf=\"emailTo.errors.required && !isValid\" class=\"error text-danger\"><i\r\n                    class=\"material-icons\">info</i> Required </div>\r\n                <div *ngIf=\"emailSupplierForm.submitted && !isValid && emailTo.errors.pattern\"\r\n                  class=\"error text-danger\">\r\n                  <i class=\"material-icons\">info</i> Invalid Email Address </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-2\">\r\n              <span class=\"d-flex justify-content-between\">\r\n                <label class=\"label-light\">CC</label>\r\n                <a [routerLink]=\"\" (click)=\"clearAll('CC')\">Clear all</a>\r\n              </span>\r\n              <input type=\"text\" pattern=\"^(\\s?[^\\s,]+@[^\\s,]+\\.[^\\s,]+\\s?,)*(\\s?[^\\s,]+@[^\\s,]+\\.[^\\s,]+)$\"\r\n                [(ngModel)]=\"emailSupplier.Cc\" name=\"emailCc\" #emailCc=\"ngModel\" class=\"form-control form-control-lg\">\r\n              <div *ngIf=\"emailCc.dirty && emailCc.invalid\">\r\n                <div *ngIf=\"emailSupplierForm.submitted && !isValid && emailCc.errors.pattern\"\r\n                  class=\"error text-danger\">\r\n                  <i class=\"material-icons\">info</i> Invalid Email Address </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-2\">\r\n              <span class=\"d-flex justify-content-between\">\r\n                <label class=\"label-light \">BCC</label>\r\n                <a [routerLink]=\"\" (click)=\"clearAll('BCC')\">Clear all</a>\r\n              </span>\r\n              <input type=\"text\" pattern=\"^(\\s?[^\\s,]+@[^\\s,]+\\.[^\\s,]+\\s?,)*(\\s?[^\\s,]+@[^\\s,]+\\.[^\\s,]+)$\"\r\n                [(ngModel)]=\"emailSupplier.Bcc\" #emailBCc=\"ngModel\" name=\"emailBCc\"\r\n                class=\"form-control form-control-lg\">\r\n              <div *ngIf=\"emailBCc.dirty && emailBCc.invalid\">\r\n                <div *ngIf=\"emailSupplierForm.submitted && !isValid && emailBCc.errors.pattern\"\r\n                  class=\"error text-danger\">\r\n                  <i class=\"material-icons\">info</i> Invalid Email Address </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-2\">\r\n              <span class=\"d-flex justify-content-between\">\r\n                <label class=\"label-light \">Subject</label>\r\n              </span>\r\n              <input type=\"text\" [(ngModel)]=\"emailSupplier.Subject\" name=\"emailSubject\"\r\n                class=\"form-control form-control-lg\">\r\n            </div>\r\n          </div>\r\n          <!-- apikey -->\r\n          <!-- macrosoftinc.com -- 6qm95oqy9u3jt5kuhy9ge4mczyd8l7w9diz52rfo8yeth8y3 -->\r\n          <div class=\"form-group mb-2\">\r\n            <editor id=\"body\" apiKey=\"6qm95oqy9u3jt5kuhy9ge4mczyd8l7w9diz52rfo8yeth8y3\" [(ngModel)]=\"emailSupplier.Body\" name=\"body\"\r\n              initialValue=\"{{ emailSupplier.Body }}\" [init]=\"initTinyMCE()\"></editor>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer py-2\">\r\n      <button type=\"submit\" class=\"btn btn-blue my-1\">Send</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- HTML Templates -->\r\n<div id=\"Welcome\" #welcome [hidden]=\"true\">\r\n  <p>Hi {{ supplier.CompanyName }}</p>\r\n  <p>Thank you for submitting the information for your Search Engine Optimization order.</p>\r\n  <p>Our team is scheduled to begin optimizing *Number* products on *Date*</p>\r\n  <p>During the SEO process, we recommend you don&rsquo;t make changes to your products or data; it may interfere with\r\n    the accuracy of the optimizations.</p>\r\n  <p>Our expert team of optimizers will enhance the following fields:</p>\r\n  <ul>\r\n    <li><strong>Optimized Description</strong> &ndash; A detailed paragraph describing product features using\r\n      creative/promotional language.</li>\r\n    <li><strong>SEO Keywords</strong> &ndash; An extensive list of relevant shapes, sizes, colors, imprint methods,\r\n      promotional terms, category-based wording and alternative spellings of words related to the product.</li>\r\n    <li><strong>Summary Description</strong> &ndash; A brief summation of the product (up to 130 characters)</li>\r\n    <li><strong>Categories</strong> &ndash; We&rsquo;ll review and ensure the existing product categories are accurate\r\n      and relevant, and add any new ones that may apply.</li>\r\n    <li><strong>Themes</strong> &ndash; We&rsquo;ll review the existing themes for accuracy and add new ones to help\r\n      maximize search results.</li>\r\n  </ul>\r\n  <p>Pease keep in mind that the best way to increase product exposure is to make sure your product data includes all\r\n    applicate attributes and information.&nbsp; Review the Product Scorecard regularly to make sure your product data is\r\n    complete.</p>\r\n  <p>You will be notified when your optimization is complete.</p>\r\n  <p><strong>&nbsp;</strong></p>\r\n  <p>Best Regards,</p>\r\n  <p>Search Engine Optimization Team</p>\r\n  <p>Advertising Specialty Institute<sup>&reg; </sup>| Every Step of the Way&trade;&nbsp;</p>\r\n  <p>&nbsp;</p>\r\n  <p>Email: <u><a href=\"mailto:Optimizations@asicentral.com\">Optimizations@asicentral.com</a></u></p>\r\n  <p>Phone: (215) 953-3017</p>\r\n  <p>Fax: (215) 953-3112</p>\r\n  <p>Web: <u><a href=\"http://www.asicentral.com\">www.asicentral.com</a></u></p>\r\n  <p>&nbsp;</p>\r\n  <p>Access the Industry&rsquo;s #1 Product Sourcing Tool:&nbsp; <a\r\n      href=\"http://www.searchesp.com/\">www.searchESP.com</a></p>\r\n</div>\r\n<div id=\"ReadyForReview\" #rfr [hidden]=\"true\">\r\n  <p>Good morning/afternoon {{ supplier.CompanyName }}</p>\r\n  <p>We have completed [XXX products of] your Search Engine Optimization.&nbsp; Please log into XXXXXXXXXXX to access\r\n    and\r\n    review the optimized data. Use the comment box to indicate any changes required. &nbsp;Note: Upon approval, the\r\n    optimized data will automatically publish and be available in ESP within 30 minutes.&nbsp;</p>\r\n  <p>Should you have any questions or concerns, please contact us.&nbsp; I will be happy to help you.</p>\r\n  <p>&nbsp;</p>\r\n  <p>Best Regards,</p>\r\n  <p>Search Engine Optimization Team</p>\r\n  <p>Advertising Specialty Institute<sup>&reg; </sup>| Every Step of the Way&trade;&nbsp;</p>\r\n  <p>&nbsp;</p>\r\n  <p>Email: <u><a href=\"mailto:Optimizations@asicentral.com\">Optimizations@asicentral.com</a></u></p>\r\n  <p>Phone: (215) 953-3017</p>\r\n  <p>Fax: (215) 953-3112</p>\r\n  <p>Web: <u><a href=\"http://www.asicentral.com\">www.asicentral.com</a></u></p>\r\n  <p>&nbsp;</p>\r\n  <p>Access the Industry&rsquo;s #1 Product Sourcing Tool:&nbsp; <a\r\n      href=\"http://www.searchesp.com/\">www.searchESP.com</a> </p>\r\n</div>\r\n<div id=\"SEOComplete\" #complete [hidden]=\"true\">\r\n  <p>Hi {{ supplier.CompanyName }}</p>\r\n  <p>Congratulations! The data for your optimized products has been implemented and activated in ESP, and you should\r\n    start seeing the benefits our of our Search Engine Optimization program!</p>\r\n  <p>Remember, the best way to increase product exposure is to make sure your product data includes all applicate\r\n    attributes and information. &nbsp;Review the Product Scorecard regularly to see where your product data can use\r\n    improvement for search-ability and order-ability.&nbsp;</p>\r\n  <p>On the Product Scorecard will a number will display next to each attribute where data is missing.&nbsp; Just click\r\n    the link and you will be taken to those products with missing information.&nbsp; Complete this information to ensure\r\n    that your products are the most searchable and orderable.</p>\r\n  <p>Please let me know if you have any questions.</p>\r\n  <p>&nbsp;</p>\r\n  <p>Best Regards,</p>\r\n  <p>Search Engine Optimization Team</p>\r\n  <p>Advertising Specialty Institute<sup>&reg; </sup>| Every Step of the Way&trade;&nbsp;</p>\r\n  <p>&nbsp;</p>\r\n  <p>Email: <u><a href=\"mailto:Optimizations@asicentral.com\">Optimizations@asicentral.com</a></u></p>\r\n  <p>Phone: (215) 953-3017</p>\r\n  <p>Fax: (215) 953-3112</p>\r\n  <p>Web: <u><a href=\"http://www.asicentral.com\">www.asicentral.com</a></u></p>\r\n  <p>&nbsp;</p>\r\n  <p>Access the Industry&rsquo;s #1 Product Sourcing Tool:&nbsp; <a\r\n      href=\"http://www.searchesp.com/\">www.searchESP.com</a></p>\r\n</div>\r\n<div id=\"other\" #other [hidden]=\"true\">\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/product-category-modal/product-category-modal.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/product-category-modal/product-category-modal.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header esp-modal-header\">\r\n    <h4 *ngIf=\"isSelectCategoryTypeView\" class=\"modal-title\">Select Category Type</h4>\r\n    <h4 *ngIf=\"!isSelectCategoryTypeView\" class=\"modal-title\">Choose Categories</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div *ngIf=\"isSelectCategoryTypeView\">\r\n        <button type=\"submit\" class=\"btn btn-blue my-1\" (click)=\"showCategories(true)\">Product</button> &nbsp;\r\n        <button type=\"submit\" class=\"btn btn-blue my-1\" (click)=\"showCategories(false)\">EIT</button>\r\n    </div>\r\n    <div *ngIf=\"!isSelectCategoryTypeView\">\r\n        <em>All Available Categories</em>\r\n        <hr>\r\n        <div class=\"search-cat form-inline\">\r\n            <label>Search Categories:&nbsp;</label>\r\n            <input class=\"form-control\" type=\"text\" (input)=\"onSearchChange($event.target.value)\">\r\n        </div>\r\n\t\t<hr>\r\n        <div class=\"row float-left\" *ngIf='productCategories && productCategories.length > 0'>\r\n            <div class=\"d-block email-supplier-form py-2 col-6 col-md-6 col-lg-6\"\r\n                *ngFor=\"let productCategory of productCategories\">\r\n                <div class=\"margin0\">\r\n                    <div class=\"control-group checkbox\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"productCategory.IsSelected\"\r\n                            (change)=\"onCategoryChecked(productCategory)\"\r\n                            [disabled]=\"productCategory.IsDisabled\">\r\n                        <span data-bind=\" text: name\">{{productCategory.Value}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer py-2\">\r\n    <div *ngIf=\"isSelectCategoryTypeView\">\r\n        <button type=\"submit\" class=\"btn btn-blue my-1\" (click)=\"close()\">Cancel</button>\r\n    </div>\r\n    <div *ngIf=\"!isSelectCategoryTypeView\">\r\n        <div class=\"inline-block marginR10\">\r\n            <span>{{selectedCategoryCount}} </span>\r\n            <span>categories selected &nbsp;&nbsp;</span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-blue my-1\" (click)=\"applyCategories()\">Apply</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-optimization/product-optimization.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-optimization/product-optimization.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row esp-sub-header pt-2\">\r\n    <div *ngIf=\"isLoading\" class=\"progress-img d-flex text-center\">\r\n        <img src=\"assets/images/esp-loader-genreal.gif\" class=\"justify-content-center align-self-center mx-auto\">\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12\">\r\n        <figure><img src=\"./assets/images/image.png\"></figure>\r\n    </div>\r\n    <div class=\"col text-lg-right text-md-left text-sm-left text-left\">\r\n        <div class=\"float-lg-left float-md-left\"><label class=\"label-black\">Adding Details for&nbsp;</label> <label\r\n                class=\"label-light\"> <i>{{currentProduct.AsiProdNo}} {{currentProduct.AsiProdNo ? '/' : ''}}\r\n                    {{currentProduct.Name}} </i></label>\r\n        </div>\r\n        <div class=\" float-lg-right float-md-left\">\r\n            <div class=\"col\"> <a href=\"#/searchProduct\" class=\"mr-3\">Manage My Products</a>\r\n                <span *ngIf=\"hasPreviousProduct\">\r\n                    <a (click)=\"getNextOrPreviousProduct(false)\" href=\"#/optimizeProduct\" class=\"mr-3\">Previous\r\n                        Product</a>\r\n                </span>\r\n                <span *ngIf=\"!hasPreviousProduct\">\r\n                    <a class=\"mr-3\">Previous Product</a>\r\n                </span>\r\n                <span *ngIf=\"hasNextProduct\">\r\n                    <a (click)=\"getNextOrPreviousProduct(true)\" href=\"#/optimizeProduct\" class=\"mr-3\">Next Product</a>\r\n                </span>\r\n                <span *ngIf=\"!hasNextProduct\">\r\n                    <a class=\"mr-3\">Next Product</a>\r\n                </span>\r\n                <a href=\"#/searchProduct\"> Cancel and Exit</a>\r\n            </div>\r\n            <div class=\"col\"> <label class=\"label-black\">{{supplier.CompanyName}}</label> <label\r\n                    class=\"label-red\">&nbsp;asi/{{supplier.AsiNumber}}</label><label\r\n                    class=\"label-black\">&nbsp;({{supplier.CountryCode}})</label></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row h-100\">\r\n    <div class=\"col-12\">\r\n        <div class=\"d-block border mb-4 pb-4 h-100\">\r\n            <div class=\"col-12 col-md-6 col-lg-3\">\r\n                <h5 class=\"pt-2\">Product Optimization</h5>\r\n            </div>\r\n            <div class=\"col-12 d-flex flex-row\">\r\n                <div class=\"p-0\">\r\n                    <div class=\"figure product-image-thumb\">\r\n                        <img style=\"width:114px;height:126px;\"\r\n                            src=\"{{ currentProduct.PrimaryImageUrl && currentProduct.PrimaryImageUrl !== '' ? currentProduct.PrimaryImageUrl : './assets/images/no_image.png' }}\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"p-3\">\r\n                    <label class=\"label-black\">Product SEO Status:&nbsp;</label>\r\n                    <label class=\"label-light\">{{ currentProduct.SEOStatus }}</label>\r\n                    <div class=\"clearfix\"></div>\r\n                    <label class=\"label-dark\">XID:&nbsp;</label><label\r\n                        class=\"label-red\">{{currentProduct.ExternalProductId}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-md-12 col-sm-12 col-lg-6 float-lg-left float-md-none float-sm-none \">\r\n                <div class=\"col-12 product-optimization-aside\">\r\n                    <h5 class=\"pt-3\">Current Data</h5>\r\n                    <p class=\"label-black mb-0\">Description</p>\r\n                    <p class=\"product-supplier\">{{currentProduct.Description}}</p>\r\n                    <p class=\"label-black mb-0\">Summary</p>\r\n                    <p class=\"product-summary\">{{currentProduct.Summary}}</p>\r\n                    <p class=\"label-black mb-0\">Category</p>\r\n                    <table class=\"table category-table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>Categories</td>\r\n                                <td>Product</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <ng-container *ngIf=\"currentProduct && currentProduct.ProductCategories\">\r\n                                <tr *ngFor=\"let category of currentProduct.ProductCategories\">\r\n                                    <td>{{category.Value}}</td>\r\n                                    <td>{{category.Type}}</td>\r\n                                </tr>\r\n                            </ng-container>\r\n                        </tbody>\r\n                    </table>\r\n                    <p class=\"label-black mb-0\">Product Keywords:</p>\r\n                    <p>{{productKeywords ? productKeywords : 'N/A'}}</p>\r\n                    <p class=\"label-black mb-0\">SEO Keywords:</p>\r\n                    <p>{{seoKeywords ? seoKeywords : 'N/A'}}</p>\r\n                    <p class=\"label-black mb-0\">Advertising Keywords:</p>\r\n                    <p>{{adKeywords ? adKeywords : 'N/A'}}</p>\r\n                    <p class=\"label-black mb-0\">Product Theme:</p>\r\n                    <p *ngIf=\"hasProductThemes\">{{ hasProductThemes ? currentProduct.ProductThemes : 'N/A'}}</p>\r\n                </div>\r\n            </div>\r\n            <form (ngSubmit)=\"saveSeoProduct()\" #optimizeForm=\"ngForm\" class=\"h-100\" autocomplete=\"off\"\r\n                (keydown.enter)=\"$event.preventDefault()\">\r\n                <div class=\"col-12 col-md-12 col-sm-12 col-lg-6 float-lg-left float-md-none float-sm-none \">\r\n                    <div class=\"col-12 product-optimization-aside\">\r\n                        <h5 class=\"pt-3\">SEO Data</h5>\r\n                        <p class=\"label-black mb-0\">Optimized Description</p>\r\n                        <div class=\"form-group\">\r\n                            <textarea [(ngModel)]=\"seoProduct.Description\" #description=\"ngModel\" name=\"description\"\r\n                                required class=\"form-control\" rows=\"4\" maxlength=\"800\" (click)=\"onClick()\"></textarea>\r\n                            <label class=\"label-light\">{{seoProduct.Description.length}} of 800 characters</label>\r\n                            <div *ngIf=\"description.invalid && (description.dirty || description.touched)\"\r\n                                class=\"error text-danger\">\r\n                                <div *ngIf=\"description.errors.required\">\r\n                                    <i class=\"material-icons\">info</i> Product description is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <p class=\"label-black mb-0\">Optimized Summary</p>\r\n                        <p>Enter an abridged description for quick view and other short description areas</p>\r\n                        <div class=\"form-group\">\r\n                            <textarea [(ngModel)]=\"seoProduct.Summary\" #summary=\"ngModel\" name=\"summary\" required\r\n                                class=\"form-control\" rows=\"Z\" maxlength=\"130\"></textarea>\r\n                            <label class=\"label-light\">{{seoProduct.Summary?.length}} of 130 characters</label>\r\n                            <div *ngIf=\"summary.invalid && (summary.dirty || summary.touched)\"\r\n                                class=\"error text-danger\">\r\n                                <div *ngIf=\"summary.errors.required\">\r\n                                    <i class=\"material-icons\">info</i> Product summary is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <p class=\"label-black mb-0\">Categories</p>\r\n                        <p>Choose up to 2 categories that describe your product.</p>\r\n                        <button type=\"button\" (click)=\"openProductCategories()\"\r\n                            class=\"btn esp-btn-white my-1 mr-2\">Choose a Category</button>\r\n                        <table class=\"table category-table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <td>Categories</td>\r\n                                    <td>Type</td>\r\n                                    <td></td>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let category of this.categoryService.getCategories()\">\r\n                                    <td>{{category.Value}}</td>\r\n                                    <td>{{category.Type}}</td>\r\n                                    <td>\r\n                                        <a class=\"remove-searched\"><input (click)=\"removeCategory(category.Value)\"\r\n                                                type=\"button\" /> <i class=\"material-icons\">close</i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p class=\"label-black mb-0\">SEO Keywords:</p>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"d-flex justify-content-between\"><label class=\"label-light \">Seperate keyword\r\n                                    with a\r\n                                    comma</label>\r\n                                <button type=\"button\" [disabled]=\"seoProduct.SeoKeywords.length == 0\"\r\n                                    (click)=\"openClearAll(true)\" class=\"btn btn-blue my-1\">Clear\r\n                                    All</button>\r\n                            </span>\r\n                            <span class=\" e-keyword\" *ngFor=\"let keyword of seoProduct.SeoKeywords\">\r\n                                <a class=\"remove-searched\">{{keyword}}\r\n                                    <input (click)=\"cancelItem(keyword, true)\" type=\"text\" />\r\n                                    <i class=\"material-icons\">close</i>\r\n                                </a>\r\n                            </span>\r\n                            <input type=\"text\" [(ngModel)]=\"seoKeyword\" name=\"seoKeyword\"\r\n                                (keyup.enter)=\"enterKeyword(seoKeyword)\" class=\"form-control keyword-sel-text-bx\" />\r\n                        </div>\r\n                        <p class=\"label-black mb-0\">Product Theme:</p>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"d-flex justify-content-between float-right\">\r\n                                <button type=\"button\" [disabled]=\"seoProduct.ProductThemes.length == 0\"\r\n                                    (click)=\"openClearAll(false)\" class=\"btn btn-blue my-1\">Clear\r\n                                    All</button>\r\n                            </span>\r\n                            <span class=\" e-keyword\" *ngFor=\"let theme of seoProduct.ProductThemes\">\r\n                                <a class=\"remove-searched\">{{theme}}\r\n                                    <input (click)=\"cancelItem(theme, false)\" type=\"text\" />\r\n                                    <i class=\"material-icons\">close</i>\r\n                                </a>\r\n                            </span>\r\n                            <input name=\"searchtxt\" id=\"searchtxt\" type=\"text\" class=\"form-control keyword-sel-text-bx\"\r\n                                [(ngModel)]=\"searchTheme\" [ngbTypeahead]=\"search\" [resultFormatter]=\"formatter\"\r\n                                (selectItem)=\"themeSelected($event)\" />\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"form-group mt-2 col-2 p-0\">\r\n                            <select name=\"themeddl\" class=\"form-control\" [(ngModel)]='themeSearchFilter'>\r\n                                <option disabled>Search Filter Options</option>\r\n                                <option>Start With</option>\r\n                                <option>Contains</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n                <div class=\"col-12 text-lg-right text-md-right text-sm-right text-center mt-1 \">\r\n                    <button type=\"button\" class=\"btn btn-blue cancel my-1 mr-2\">Cancel</button>\r\n                    <button type=\"button\" class=\"btn btn-blue my-1 mr-2\">Done</button>\r\n                    <button type=\"submit\" class=\"btn btn-blue my-1\">Save</button>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search-product/search-product.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search-product/search-product.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row esp-sub-header pt-2 ml-0\">\r\n    <div *ngIf=\"isLoading\" class=\"progress-img d-flex text-center\">\r\n        <img src=\"./assets/images/esp-loader-genreal.gif\" class=\"justify-content-center align-self-center mx-auto\">\r\n    </div>\r\n    <div class=\"col section-logo\">\r\n        <figure>\r\n            <img src=\"./assets/images/image.png\">\r\n        </figure>\r\n    </div>\r\n    <div class=\"col has-bulkedit text-center text-lg-left text-md-right text-sm-right pt-1  pl-0\">\r\n        <button type=\"submit\" class=\"btn btn-blue with-btn-gray my-1 mr-2\" (click)=\"openBulkEdit()\">\r\n            <i class=\"material-icons\">edit\r\n            </i>Bulk Edit</button>\r\n\r\n        <div class=\"dropdown sort-by-list\">\r\n            <button class=\"btn esp-btn-white my-1 mr-2 p-1 dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                Sort By\r\n            </button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"changeSort('Last Updated')\">Last Updated</a>\r\n                <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"changeSort('Product Name')\">Product Name</a>\r\n                <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"changeSort('Product Number')\">Product Number</a>\r\n                <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"changeSort('Catalog')\">Catalog</a>\r\n            </div>\r\n        </div>\r\n        <!-- (click)=\"openEmailSupplier()\" -->\r\n        <button type=\"submit\" (click)=\"openEmailSupplier()\" class=\"btn btn-blue with-btn-gray my-1 pl-3\">\r\n            <i class=\"material-icons\">email\r\n            </i>Email Supplier</button>\r\n\r\n    </div>\r\n    <app-page *ngIf='products && products.length > 0' [totalCount]='totalCount' [currPage]='currPage'\r\n        (navigate)=\"navigatePage($event)\">\r\n    </app-page>\r\n</div>\r\n<div class=\"row h-100\">\r\n    <div class=\"col side-nav-toolbar pt-2 ml-3\">\r\n        <a class=\"manage-product\">\r\n            <i class=\"material-icons\">\r\n                card_giftcard\r\n            </i>Manage Products</a>\r\n        <div class=\"clearfix\"></div>\r\n\r\n        <div class=\"input-group  pt-2\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mdlsearch\" placeholder=\"Search Product\"\r\n                aria-describedby=\"btnSearch\" (keyup.enter)=\"searchClick(mdlsearch)\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-search pt-2\" id=\"btnSearch\" (click)=searchClick(mdlsearch) type=\"button\">\r\n                    <i class=\"material-icons\">\r\n                        search\r\n                    </i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-check my-1 mr-sm-2\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"isExactMatch\" id=\"cbxExactMatch\">\r\n            <label class=\"form-check-label label-light\" for=\"cbxExactMatch\">Exact Match</label>\r\n        </div>\r\n        <div class=\"row\">\r\n            <ul class=\"side-nav-list mt-2\">\r\n                <li [hidden]=\"selectedFacetTerms.length == 0 && !showhideSearch\">\r\n                    <a>Your Search Terms</a>\r\n                    <ul class=\"side-sub-nav-list\">\r\n                        <li *ngIf=\"showhideSearch\" class=\"pl-3\">\r\n                            <a class=\"remove-searched\">{{searchtxt}} <input (click)=\"cancelSearch()\" type=\"button\" /> <i\r\n                                    class=\"material-icons\">close</i>\r\n                            </a>\r\n                        </li>\r\n                        <li *ngFor=\"let selected of selectedFacetTerms\" class=\"pl-3\">\r\n                            <a class=\"remove-searched\">{{selected.Term}} <input (click)=\"cancelItem(selected)\"\r\n                                    type=\"button\" /> <i class=\"material-icons\">close</i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <div>\r\n                        <a class=\"clearall-txt\" [routerLink]=\"\" (click)=\"clearAll()\">Clear All</a>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <a href=\".seo-status\" data-toggle=\"collapse\">SEO Status</a>\r\n                    <ul class=\"side-sub-nav-list collapse seo-status show\">\r\n                        <li *ngFor=\"let enum of seoStausEnum | keyvalue; let i = index\"\r\n                            [hidden]=\"i >= 3 && !seoStatusShowAll\">\r\n                            <a [routerLink]=\"\">{{enum.value}}</a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"see-all\" (click)=\"toggleSEOStatus(seoStatusShowAll)\">See\r\n                                {{ !seoStatusShowAll ? \"All\" : \"Less\" }}\r\n                                <i class=\"material-icons\">\r\n                                    {{ !seoStatusShowAll ? \"add_circle\" : \"remove_circle\" }}\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\".seo-flag\" data-toggle=\"collapse\">SEO Flag</a>\r\n                    <ul class=\"side-sub-nav-list collapse  seo-flag  show\">\r\n                        <li><a [routerLink]=\"\">Yes</a></li>\r\n                        <li><a [routerLink]=\"\">No</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#product_type\" data-toggle=\"collapse\">Product Type</a>\r\n                    <ul class=\"side-sub-nav-list collapse show\" id=\"product_type\">\r\n                        <li><a [routerLink]=\"\">Type 1</a></li>\r\n                        <li><a [routerLink]=\"\">Type 2</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li *ngFor=\"let search of objSearchFilter\">\r\n                    <a href=\"#{{ search.FacetId }}\" data-toggle=\"collapse\">{{search.Facet}}</a>\r\n                    <ul class=\"side-sub-nav-list collapse show\" id=\"{{ search.FacetId }}\">\r\n                        <li *ngFor=\"let facetTerm of search.Terms; let i = index\" [hidden]=\"i >= 5 && !search.SeeAll\">\r\n                            <a [routerLink]=\"\" (click)=\"facetTermClick(search.Facet, facetTerm)\">{{facetTerm.Term}}\r\n                                ({{facetTerm.Count}})</a>\r\n                        </li>\r\n                        <li *ngIf=\"search.Terms.length > 5\">\r\n                            <a class=\"see-all\" (click)=\"toggleSee(search)\">See\r\n                                {{ !search.SeeAll ? \"All\" : \"Less\" }}\r\n                                <i class=\"material-icons\">\r\n                                    {{ !search.SeeAll ? \"add_circle\" : \"remove_circle\" }}\r\n                                </i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"col pb-5\">\r\n        <div class=\"action-tool-bar px-2\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                    <div class=\"custom-control custom-checkbox my-1 mr-sm-2\">\r\n                        <input type=\"checkbox\" name=\"selectAll\" id=\"selectAll\" (change)=\"onSelectAllProducts($event)\"\r\n                            [(ngModel)]=\"isSelectAll\" />\r\n                        <label class=\"label-black\" for=\"selectAll\">Select All</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-2 pl-2\">\r\n                    <label>Product Status</label>\r\n                </div>\r\n                <div class=\"col-2 pl-2\">\r\n                    <label>SEO Status</label>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                    <label>Actions</label>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <div [hidden]=\"!noProductsFound\" class=\"col-12 result-box no-products mt-2 text-center\">\r\n            <h5 class=\"mt-5 text-normal\">No Product Found</h5>\r\n        </div>\r\n        <div [hidden]=\"noProductsFound\" class=\"col-12 result-box mt-2\" *ngFor=\"let product of products\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6 pl-2 d-flex pt-3\">\r\n                    <div class=\"select-all-box p-0\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"product.IsSelected\"\r\n                                (change)=\"onSelectProduct(product)\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"result-img\">\r\n                        <img style=\"width:114px;height:126px;\"\r\n                            src=\"{{ product.PrimaryImageUrl && product.PrimaryImageUrl !== '' ? product.PrimaryImageUrl : './assets/images/no_image.png' }}\">\r\n                    </div>\r\n                    <div class=\"result-content pl-2 \">\r\n                        <h6>{{product.Name}}</h6>\r\n                        <p>\r\n                            <span class=\"label-black\">External Product ID: </span>{{product.ExternalProductId}}</p>\r\n                        <p>\r\n                            <span class=\"label-black\">Created on: </span>{{product.CreateDateUtc | date}}</p>\r\n                        <p>\r\n                            <span class=\"label-black\">Made active: </span>{{product.PublishDateUtc | date}}</p>\r\n                        <p>\r\n                            <span class=\"label-black\">Last updated by: </span>{{product.LastUpdatedBy}} on\r\n                            {{product.LastUpdateDateUtc | date}}</p>\r\n                            <br>\r\n                        <p>\r\n                            {{product.Description}}</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-2 d-flex align-content-center flex-wrap\">\r\n                    <label>{{ productStatusEnum[product.ProductStatus] ? productStatusEnum[product.ProductStatus] : '' }}</label>\r\n                </div>\r\n                <div class=\"col-2 d-flex align-content-center flex-wrap\">\r\n                    <label>{{ seoStausEnum[product.SEOStatus] ? seoStausEnum[product.SEOStatus] : seoStausEnum.REDY }}</label>\r\n                </div>\r\n                <div class=\"col-2 p-lg-3 p-0 d-flex align-content-center flex-wrap\">\r\n                    <button class=\"btn esp-btn-white my-1 mr-2 p-1\" (click)=\"viewProduct(product.ExternalProductId)\">Start\r\n                        SEO</button>\r\n                    <!-- (click)=\"viewProduct(product.ExternalProductId)\" -->\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col float-right pr-0 btm-pagination\">\r\n            <app-page *ngIf='products && products.length > 0' [totalCount]='totalCount'\r\n                (navigate)=\"navigatePage($event)\" [currPage]='currPage'>\r\n            </app-page>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search-supplier/search-supplier.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search-supplier/search-supplier.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row esp-sub-header pt-2\">\r\n    <div *ngIf=\"isLoading\" class=\"progress-img d-flex text-center\">\r\n        <img src=\"assets/images/esp-loader-genreal.gif\" class=\"justify-content-center align-self-center mx-auto\">\r\n    </div>\r\n    <div class=\"col\">\r\n        <figure><img src=\"./assets/images/image.png\"></figure>\r\n    </div>\r\n    <div class=\"col text-right\">\r\n    </div>\r\n</div>\r\n<div class=\"row h-100\">\r\n\r\n    <div class=\"col-12\">\r\n        <div class=\"d-block border h-100 pb-5 mb-5\">\r\n            <form (ngSubmit)=\"searchSuppliers(searchSupplierForm)\" #searchSupplierForm=\"ngForm\">\r\n                <div class=\"col-12 col-md-6 col-lg-3\">\r\n                    <h5 class=\"pt-2\">Search for members</h5>\r\n                    <p>Search by name or ASI number</p>\r\n                    <div class=\"input-group  pt-2\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" noSpaces autoFocus autocomplete=\"off\"\r\n                            placeholder=\"Search Suppliers\" #searchSupplierText=\"ngModel\" name=\"searchSupplierText\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-search pt-2\" type=\"submit\"><i class=\"material-icons\">\r\n                                    search\r\n                                </i></button>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"noSearchResult && (searchSupplierText.dirty || searchSupplierText.touched)\"\r\n                        class=\"error text-danger\">\r\n                        <i class=\"material-icons\">info</i>\r\n                        0 results returned\r\n                    </div>\r\n                    <div *ngIf=\"isSearchPerformed && searchSupplierText.invalid\" class=\"error text-danger\">\r\n                        <div *ngIf=\"searchSupplierText.errors.whitespace\">\r\n                            <i class=\"material-icons\">info</i>\r\n                            Provide an ASI number or company name to search\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n            <div class=\"clearfix\"></div>\r\n            <div *ngIf='suppliers && suppliers.length > 0'>\r\n                <div class=\"row pl-3 mb-4\" *ngFor=\"let supplier of suppliers\">\r\n                    <div class=\"col-12 col-md-8 col-lg-8  float-left mt-2 bg-d-gray ml-3 pt-3 pb-3  \">\r\n                        <div class=\"d-block member-details p-2 pl-3 col-6 float-left\">\r\n                            <h6 class=\"mt-3\"><span class=\"label-red\">{{supplier.AsiNumber}}</span>\r\n                                {{supplier.CompanyName}}</h6>\r\n                            <p class=\"mb-0\">{{supplier.Address1}}</p>\r\n                            <p class=\"mb-0\">{{supplier.City}} {{supplier.StateCode}} {{supplier.PostalCode}}</p>\r\n                            <p class=\"mb-0\">Phone:&nbsp;{{supplier.PhoneNumber}}</p>\r\n                            <p>Email:&nbsp;<a href=\"mailto:{{supplier.EmailAddress}}\">{{supplier.EmailAddress}}</a></p>\r\n                            <button type=\"button\" (click)=\"emailSupplier(supplier)\" class=\"btn esp-btn-white my-1 mr-2\"><i class=\"material-icons\">\r\n                                    email\r\n                                </i>Email Supplier</button>\r\n                                <!-- (click)=\"emailSupplier(supplier)\" -->\r\n                        </div>\r\n                          <div class=\"d-block member-details col-6 float-left\">\r\n                            <table class=\"table mb-0 member-table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <td><label class=\"label-strong\">Level:</label></td>\r\n                                        <td>{{supplier.SupplierLevel}}</td>\r\n                                        <td><label class=\"label-strong\">API:</label></td>\r\n                                        <td><label class=\"label-light\"></label>{{supplier.API}}</td>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td><label class=\"label-strong\">Premier:</label></td>\r\n                                        <td>{{supplier.Premier}}</td>\r\n                                        <td><label class=\"label-strong\">Replink:</label></td>\r\n                                        <td>{{supplier.Replink}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td><label class=\"label-strong\">TLC:</label></td>\r\n                                        <td>{{supplier.TLC}}</td>\r\n                                        <td><label class=\"label-strong\">Mapped:</label></td>\r\n                                        <td>{{supplier.Mapped}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td><label class=\"label-strong\">Sportlight:</label></td>\r\n                                        <td>{{supplier.Spotlight}}</td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"d-block text-right\">\r\n                                <button class=\"btn btn-blue my-1 mr-3\" (click)=\"viewProducts(supplier)\">View\r\n                                    Products</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/page/page.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/page/page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col pagination-cont float-right\">\r\n    <nav class=\"float-right mt-2 esp-pagination\">\r\n        <ul class=\"pagination\">\r\n            <li class=\"page-item disabled\">\r\n                <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Page:</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n                <input type=\"text\" [(ngModel)]=\"currPage\" (keyup.enter)=\"pageNavigate($event.target.value)\"\r\n                    class=\"form-control pagnation-input\" digitOnly>\r\n            </li>\r\n\r\n            <li class=\"page-item disabled\" style=\"width:90px;\">\r\n                <a class=\"page-link\" href=\"#\">of {{totalPages}}</a>\r\n            </li>\r\n            <li class=\"page-item\" [class.disabled]=\"1 >= currPage\">\r\n                <a class=\"page-link arrows\" (click)=\"pageNavigate(currPage - 1)\">\r\n                    <i class=\"material-icons\">\r\n                        arrow_left\r\n                    </i>\r\n                </a>\r\n            </li>\r\n            <li class=\"page-item\" [class.disabled]=\"currPage === totalPages\">\r\n                <a class=\"page-link arrows\" (click)=\"pageNavigate(currPage + 1)\">\r\n                    <i class=\"material-icons\">\r\n                        arrow_right\r\n                    </i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _search_product_search_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-product/search-product.component */ "./src/app/search-product/search-product.component.ts");
/* harmony import */ var _search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-supplier/search-supplier.component */ "./src/app/search-supplier/search-supplier.component.ts");
/* harmony import */ var _product_optimization_product_optimization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-optimization/product-optimization.component */ "./src/app/product-optimization/product-optimization.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");








const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'searchSupplier', component: _search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_5__["SearchSupplierComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'searchProduct', component: _search_product_search_product_component__WEBPACK_IMPORTED_MODULE_4__["SearchProductComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'optimizeProduct', component: _product_optimization_product_optimization_component__WEBPACK_IMPORTED_MODULE_6__["ProductOptimizationComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n    font-size: 1.2em;\r\n    margin-bottom: 0;\r\n  }\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n  }\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\nnav a:visited, a:link {\r\n    color: #334953;\r\n  }\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #cfd8dc;\r\n  }\r\nnav a.active {\r\n    color: #039be5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbiAgbmF2IGEge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgbmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcclxuICAgIGNvbG9yOiAjMzM0OTUzO1xyXG4gIH1cclxuICBuYXYgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAzOWJlNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbiAgfVxyXG4gIG5hdiBhLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAzOWJlNTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.showHead = false;
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if ((event['url'] == '/login') || (event['url'] == '/') ||
                    ((event['url'] == '/searchSupplier') && (localStorage.getItem('userToken') == null))) {
                    this.showHead = false;
                }
                else {
                    this.showHead = true;
                }
            }
        });
    }
    ngOnInit() {
        const timer = JSON.parse(localStorage.getItem('timer'));
        if (timer && (Date.now() > timer)) {
            this.logout();
        }
    }
    logout() {
        localStorage.removeItem('userToken');
        localStorage.removeItem('supplier');
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-supplier/search-supplier.component */ "./src/app/search-supplier/search-supplier.component.ts");
/* harmony import */ var _search_product_search_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-product/search-product.component */ "./src/app/search-product/search-product.component.ts");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./seo.service */ "./src/app/seo.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _modals_bulk_edit_modal_bulk_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/bulk-edit-modal/bulk-edit-modal.component */ "./src/app/modals/bulk-edit-modal/bulk-edit-modal.component.ts");
/* harmony import */ var _shared_page_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/page/page.component */ "./src/app/shared/page/page.component.ts");
/* harmony import */ var _shared_digit_only_digit_only_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/digit-only/digit-only.directive */ "./src/app/shared/digit-only/digit-only.directive.ts");
/* harmony import */ var _shared_auto_focus_auto_focus_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/auto-focus/auto-focus.directive */ "./src/app/shared/auto-focus/auto-focus.directive.ts");
/* harmony import */ var _shared_no_whitespace_no_whitespace_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/no-whitespace/no-whitespace.directive */ "./src/app/shared/no-whitespace/no-whitespace.directive.ts");
/* harmony import */ var _modals_email_supplier_modal_email_supplier_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modals/email-supplier-modal/email-supplier-modal.component */ "./src/app/modals/email-supplier-modal/email-supplier-modal.component.ts");
/* harmony import */ var _product_optimization_product_optimization_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product-optimization/product-optimization.component */ "./src/app/product-optimization/product-optimization.component.ts");
/* harmony import */ var _modals_product_category_modal_product_category_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modals/product-category-modal/product-category-modal.component */ "./src/app/modals/product-category-modal/product-category-modal.component.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm2015/tinymce-tinymce-angular.js");
/* harmony import */ var _modals_clear_all_modal_clear_all_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modals/clear-all-modal/clear-all-modal.component */ "./src/app/modals/clear-all-modal/clear-all-modal.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_8__["SearchSupplierComponent"],
            _search_product_search_product_component__WEBPACK_IMPORTED_MODULE_9__["SearchProductComponent"],
            _modals_bulk_edit_modal_bulk_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__["BulkEditModalComponent"],
            _shared_page_page_component__WEBPACK_IMPORTED_MODULE_15__["PageComponent"],
            _shared_digit_only_digit_only_directive__WEBPACK_IMPORTED_MODULE_16__["DigitOnlyDirective"],
            _shared_auto_focus_auto_focus_directive__WEBPACK_IMPORTED_MODULE_17__["AutoFocusDirective"],
            _shared_no_whitespace_no_whitespace_directive__WEBPACK_IMPORTED_MODULE_18__["NoWhitespaceDirective"],
            _product_optimization_product_optimization_component__WEBPACK_IMPORTED_MODULE_20__["ProductOptimizationComponent"],
            _modals_email_supplier_modal_email_supplier_modal_component__WEBPACK_IMPORTED_MODULE_19__["EmailSupplierModalComponent"],
            _modals_product_category_modal_product_category_modal_component__WEBPACK_IMPORTED_MODULE_21__["ProductCategoryModalComponent"],
            _modals_clear_all_modal_clear_all_modal_component__WEBPACK_IMPORTED_MODULE_23__["ClearAllModalComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_22__["EditorModule"]
        ],
        providers: [
            _seo_service__WEBPACK_IMPORTED_MODULE_10__["SeoService"],
            _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
                multi: true
            },
            _modals_bulk_edit_modal_bulk_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__["BulkEditModalComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [
            _modals_bulk_edit_modal_bulk_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__["BulkEditModalComponent"],
            _modals_email_supplier_modal_email_supplier_modal_component__WEBPACK_IMPORTED_MODULE_19__["EmailSupplierModalComponent"],
            _modals_product_category_modal_product_category_modal_component__WEBPACK_IMPORTED_MODULE_21__["ProductCategoryModalComponent"],
            _modals_clear_all_modal_clear_all_modal_component__WEBPACK_IMPORTED_MODULE_23__["ClearAllModalComponent"]
        ],
        exports: [_shared_digit_only_digit_only_directive__WEBPACK_IMPORTED_MODULE_16__["DigitOnlyDirective"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('userToken') != null)
            return true;
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthInterceptor = class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        //if (req.headers.get('No-Auth') == "True")
        //return next.handle(req.clone());
        if (localStorage.getItem('userToken') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set("authtoken", localStorage.getItem('userToken'))
            });
            const started = Date.now();
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(event => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    const elapsed = Date.now() - started;
                    //console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                }
            }, error => {
                if (error.status === 401)
                    this.router.navigateByUrl('/login');
            }));
        }
        else {
            return next.handle(req.clone());
            //this.router.navigateByUrl('/login');
        }
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../seo.service */ "./src/app/seo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(seoService, router) {
        this.seoService = seoService;
        this.router = router;
        this.loginSeo = { Asi: '', Username: '', Password: '' };
        //loginSeo: ISeoLogin = {Asi: '30232', Username: 'umarejaz', Password: 'Asiqa2014a'};
        this.error = '';
        this.isLoading = false;
        this.rememberPreference = false;
    }
    ngOnInit() {
        if (localStorage.getItem('asiNumber') != null) {
            this.rememberPreference = true;
            this.loginSeo.Asi = localStorage.getItem('asiNumber');
            this.loginSeo.Username = localStorage.getItem('userName');
        }
    }
    loginAsiSeo() {
        this.error = '';
        this.isLoading = true;
        this.loginSeo.Asi = this.loginSeo.Asi.trim();
        this.loginSeo.Username = this.loginSeo.Username.trim();
        this.seoService.loginSeo(this.loginSeo)
            .subscribe(data => {
            if (data.AccessToken) {
                const time_to_login = Date.now() + 86400000; //24 hours = 86400000 ms 
                if (this.rememberPreference) {
                    localStorage.setItem('asiNumber', this.loginSeo.Asi);
                    localStorage.setItem('userName', this.loginSeo.Username);
                }
                else {
                    localStorage.removeItem('asiNumber');
                    localStorage.removeItem('userName');
                }
                localStorage.setItem('userToken', data.AccessToken);
                localStorage.setItem('timer', JSON.stringify(time_to_login));
                this.isLoading = false;
                this.router.navigate(['/searchSupplier']);
            }
            else {
                if (data.error && data.error.ExceptionMessage) {
                    this.error = data.error.ExceptionMessage;
                }
                else if (data.error && data.error.error && data.error.error.Message) {
                    this.error = data.error.error.Message;
                }
                else {
                    this.error = data.error.Message;
                }
            }
            this.isLoading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modals/bulk-edit-modal/bulk-edit-modal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modals/bulk-edit-modal/bulk-edit-modal.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9idWxrLWVkaXQtbW9kYWwvYnVsay1lZGl0LW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modals/bulk-edit-modal/bulk-edit-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modals/bulk-edit-modal/bulk-edit-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: BulkEditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkEditModalComponent", function() { return BulkEditModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let BulkEditModalComponent = class BulkEditModalComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    close() {
        this.modal.dismiss();
    }
};
BulkEditModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
BulkEditModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bulk-edit-modal',
        template: __webpack_require__(/*! raw-loader!./bulk-edit-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modals/bulk-edit-modal/bulk-edit-modal.component.html"),
        styles: [__webpack_require__(/*! ./bulk-edit-modal.component.css */ "./src/app/modals/bulk-edit-modal/bulk-edit-modal.component.css")]
    })
], BulkEditModalComponent);



/***/ }),

/***/ "./src/app/modals/clear-all-modal/clear-all-modal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modals/clear-all-modal/clear-all-modal.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9jbGVhci1hbGwtbW9kYWwvY2xlYXItYWxsLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modals/clear-all-modal/clear-all-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modals/clear-all-modal/clear-all-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClearAllModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearAllModalComponent", function() { return ClearAllModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ClearAllModalComponent = class ClearAllModalComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    close() {
        this.modal.dismiss();
    }
    clearKeywords() {
        this.modal.close('clear');
    }
};
ClearAllModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClearAllModalComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClearAllModalComponent.prototype, "message", void 0);
ClearAllModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clear-all-modal',
        template: __webpack_require__(/*! raw-loader!./clear-all-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modals/clear-all-modal/clear-all-modal.component.html"),
        styles: [__webpack_require__(/*! ./clear-all-modal.component.css */ "./src/app/modals/clear-all-modal/clear-all-modal.component.css")]
    })
], ClearAllModalComponent);



/***/ }),

/***/ "./src/app/modals/email-supplier-modal/email-supplier-modal.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modals/email-supplier-modal/email-supplier-modal.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9lbWFpbC1zdXBwbGllci1tb2RhbC9lbWFpbC1zdXBwbGllci1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modals/email-supplier-modal/email-supplier-modal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modals/email-supplier-modal/email-supplier-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmailSupplierModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSupplierModalComponent", function() { return EmailSupplierModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_shared_models_emailSupplier_EmailSupplier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/emailSupplier/EmailSupplier */ "./src/app/shared/models/emailSupplier/EmailSupplier.ts");
/* harmony import */ var src_app_shared_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/supplier.service */ "./src/app/shared/services/supplier.service.ts");





let EmailSupplierModalComponent = class EmailSupplierModalComponent {
    constructor(modal, supplierService) {
        this.modal = modal;
        this.supplierService = supplierService;
        this.isValid = false;
        this.selectedTemplate = '';
    }
    ngOnInit() {
        if (this.supplier) {
            this.emailSupplier = new src_app_shared_models_emailSupplier_EmailSupplier__WEBPACK_IMPORTED_MODULE_3__["EmailSupplier"](this.supplier);
        }
    }
    initTinyMCE() {
        var settings = {
            menubar: false,
            plugins: 'link',
            toolbar: 'bold italic backcolor alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat'
        };
        return settings;
    }
    close() {
        this.modal.dismiss();
    }
    clearAll(option) {
        if (option == 'TO')
            this.emailSupplier.To = '';
        if (option == 'CC')
            this.emailSupplier.Cc = '';
        if (option == 'BCC')
            this.emailSupplier.Bcc = '';
    }
    selectTemplate(template) {
        if (template && template.id) {
            this.selectedTemplate = template.id;
            this.emailSupplier.Body = template.innerHTML;
        }
        else {
            this.selectedTemplate = 'Other';
        }
    }
    send(form) {
        if (form.valid) {
            this.isValid = true;
        }
        else {
            this.isValid = false;
            return;
        }
        // this.supplierService.sendEmail(this.emailSupplier).subscribe(x => {
        //   console.log(x);
        // })
    }
};
EmailSupplierModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: src_app_shared_services_supplier_service__WEBPACK_IMPORTED_MODULE_4__["SupplierService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EmailSupplierModalComponent.prototype, "supplier", void 0);
EmailSupplierModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-supplier-modal',
        template: __webpack_require__(/*! raw-loader!./email-supplier-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modals/email-supplier-modal/email-supplier-modal.component.html"),
        styles: [__webpack_require__(/*! ./email-supplier-modal.component.css */ "./src/app/modals/email-supplier-modal/email-supplier-modal.component.css")]
    })
], EmailSupplierModalComponent);



/***/ }),

/***/ "./src/app/modals/product-category-modal/product-category-modal.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modals/product-category-modal/product-category-modal.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9wcm9kdWN0LWNhdGVnb3J5LW1vZGFsL3Byb2R1Y3QtY2F0ZWdvcnktbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modals/product-category-modal/product-category-modal.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modals/product-category-modal/product-category-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductCategoryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryModalComponent", function() { return ProductCategoryModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var src_app_shared_models_optimizeProduct_EnumCategoryType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/optimizeProduct/EnumCategoryType */ "./src/app/shared/models/optimizeProduct/EnumCategoryType.ts");





let ProductCategoryModalComponent = class ProductCategoryModalComponent {
    constructor(modal, categoryService) {
        this.modal = modal;
        this.categoryService = categoryService;
        this.productCategories = [];
        this.allProductCategories = [];
        this.selectedCategoryCount = 0;
        this.isSelectCategoryTypeView = false;
        this.isProductType = false;
    }
    ngOnInit() {
        this.isSelectCategoryTypeView = true;
    }
    close() {
        this.modal.dismiss();
    }
    showCategories(isProductType) {
        this.isProductType = isProductType;
        this.isSelectCategoryTypeView = false;
        this.populateCategories();
    }
    populateCategories() {
        if (this.inputProductCategories) {
            this.productCategories = this.inputProductCategories;
            this.allProductCategories = this.inputProductCategories;
            let allProductTypeCategories = this.allProductCategories.filter(x => x.IsSelected && x.Type == src_app_shared_models_optimizeProduct_EnumCategoryType__WEBPACK_IMPORTED_MODULE_4__["EnumCategoryType"].PRODUCT);
            let allEitTypeCategories = this.allProductCategories.filter(x => x.IsSelected && x.Type == src_app_shared_models_optimizeProduct_EnumCategoryType__WEBPACK_IMPORTED_MODULE_4__["EnumCategoryType"].EIT);
            if ((this.isProductType && allProductTypeCategories.length < 2) || (!this.isProductType && allEitTypeCategories.length < 5)) {
                this.isProductCategoriesDisabled(this.allProductCategories.filter(x => !x.IsSelected), false);
            }
            if (this.isProductType) {
                this.selectedCategoryCount = allProductTypeCategories.length;
                this.isProductCategoriesDisabled(allProductTypeCategories, false);
                this.isProductCategoriesDisabled(allEitTypeCategories, true);
            }
            else {
                this.selectedCategoryCount = allEitTypeCategories.length;
                this.isProductCategoriesDisabled(allProductTypeCategories, true);
                this.isProductCategoriesDisabled(allEitTypeCategories, false);
            }
        }
    }
    onCategoryChecked(productCategory) {
        let productCategories = this.productCategories.filter(x => !x.IsSelected);
        //let allProductTypeCategories = this.productCategories.filter(x => x.IsSelected && x.IsProductCategoryType);
        //let allEitTypeCategories = this.productCategories.filter(x => x.IsSelected && !x.IsProductCategoryType);
        if (this.isProductType) {
            productCategory.Type = src_app_shared_models_optimizeProduct_EnumCategoryType__WEBPACK_IMPORTED_MODULE_4__["EnumCategoryType"].PRODUCT;
        }
        else {
            productCategory.Type = src_app_shared_models_optimizeProduct_EnumCategoryType__WEBPACK_IMPORTED_MODULE_4__["EnumCategoryType"].EIT;
        }
        if (productCategory.IsSelected) {
            this.selectedCategoryCount += 1;
        }
        else {
            this.selectedCategoryCount -= 1;
        }
        if (this.isProductType) {
            if (this.selectedCategoryCount > 1) {
                this.isProductCategoriesDisabled(productCategories, true);
            }
            else {
                this.isProductCategoriesDisabled(productCategories, false);
            }
        }
        else {
            if (this.selectedCategoryCount > 4) {
                this.isProductCategoriesDisabled(productCategories, true);
            }
            else {
                this.isProductCategoriesDisabled(productCategories, false);
            }
        }
    }
    isProductCategoriesDisabled(productCategories, isDisabled) {
        //let uncheckedProductCategories = this.productCategories.filter(x => !x.IsSelected);
        productCategories.map(function (x) {
            x.IsDisabled = isDisabled;
        });
    }
    applyCategories() {
        this.onSearchChange("");
        this.categoryService.setCategories(this.productCategories.filter(x => x.IsSelected));
        this.modal.close('success');
    }
    onSearchChange(searchText) {
        let selectedCategories = this.productCategories.filter(x => x.IsSelected);
        for (var i = 0; i < selectedCategories.length; i++) {
            let index = this.allProductCategories.findIndex(x => x.Value === selectedCategories[i].Value);
            this.allProductCategories[index].IsSelected = true;
        }
        this.productCategories = this.allProductCategories;
        this.productCategories = this.filterByValue(this.productCategories, searchText);
    }
    filterByValue(array, value) {
        return array.filter((data) => JSON.stringify(data.Value).toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
};
ProductCategoryModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductCategoryModalComponent.prototype, "inputProductCategories", void 0);
ProductCategoryModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-category-modal',
        template: __webpack_require__(/*! raw-loader!./product-category-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modals/product-category-modal/product-category-modal.component.html"),
        styles: [__webpack_require__(/*! ./product-category-modal.component.css */ "./src/app/modals/product-category-modal/product-category-modal.component.css")]
    })
], ProductCategoryModalComponent);



/***/ }),

/***/ "./src/app/product-optimization/product-optimization.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/product-optimization/product-optimization.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Qtb3B0aW1pemF0aW9uL3Byb2R1Y3Qtb3B0aW1pemF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product-optimization/product-optimization.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/product-optimization/product-optimization.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductOptimizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOptimizationComponent", function() { return ProductOptimizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seo.service */ "./src/app/seo.service.ts");
/* harmony import */ var _shared_models_optimizeProduct_OptimizeProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/optimizeProduct/OptimizeProduct */ "./src/app/shared/models/optimizeProduct/OptimizeProduct.ts");
/* harmony import */ var _shared_models_optimizeProduct_ProductCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/optimizeProduct/ProductCategory */ "./src/app/shared/models/optimizeProduct/ProductCategory.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modals_product_category_modal_product_category_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/product-category-modal/product-category-modal.component */ "./src/app/modals/product-category-modal/product-category-modal.component.ts");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _shared_models_searchProduct_SearchProduct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/models/searchProduct/SearchProduct */ "./src/app/shared/models/searchProduct/SearchProduct.ts");
/* harmony import */ var _shared_services_supplier_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/supplier.service */ "./src/app/shared/services/supplier.service.ts");
/* harmony import */ var _modals_clear_all_modal_clear_all_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/clear-all-modal/clear-all-modal.component */ "./src/app/modals/clear-all-modal/clear-all-modal.component.ts");
/* harmony import */ var _shared_models_searchProduct_EnumSeoStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/models/searchProduct/EnumSeoStatus */ "./src/app/shared/models/searchProduct/EnumSeoStatus.ts");
/* harmony import */ var _shared_models_optimizeProduct_EnumKeywordType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/models/optimizeProduct/EnumKeywordType */ "./src/app/shared/models/optimizeProduct/EnumKeywordType.ts");
/* harmony import */ var _shared_models_optimizeProduct_EnumCategoryType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/models/optimizeProduct/EnumCategoryType */ "./src/app/shared/models/optimizeProduct/EnumCategoryType.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
















let ProductOptimizationComponent = class ProductOptimizationComponent {
    constructor(seoService, router, modalService, categoryService, supplierService) {
        this.seoService = seoService;
        this.router = router;
        this.modalService = modalService;
        this.categoryService = categoryService;
        this.supplierService = supplierService;
        this.seoStausEnum = _shared_models_searchProduct_EnumSeoStatus__WEBPACK_IMPORTED_MODULE_12__["EnumSeoStatus"];
        this.themeSearchFilter = "Start With";
        this.allExternalProductIds = [];
        this.productCategories = [];
        this.selectedCategories = [];
        this.searchProducts = [];
        this.themes = [];
        this.formatter = (result) => result.toUpperCase();
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])(theme => theme === '' ? []
            : this.themeSearchFilter == 'Start With' ? this.themes.filter(v => v.toLowerCase().startsWith(theme.toLowerCase())).slice(0, 10) :
                this.themes.filter(v => v.toLowerCase().indexOf(theme.toLowerCase()) > -1).slice(0, 10)));
    }
    ngOnInit() {
        this.getAllCategories();
        this.getAllThemes();
        this.supplier = this.supplierService.getSupplier();
        this.populateProductsData();
    }
    populateProductsData() {
        this.InitializeProductsData();
        this.searchProducts = JSON.parse(localStorage.getItem('searchProducts')).map((products) => new _shared_models_searchProduct_SearchProduct__WEBPACK_IMPORTED_MODULE_9__["SearchProduct"](products));
        this.allExternalProductIds = this.searchProducts.map((product) => product.ExternalProductId).toString().split(',');
        if (!this.isNextOrPreviousClick) {
            this.externalProductId = localStorage.getItem('selectedExternalProductId');
            let currentIndex = this.allExternalProductIds.indexOf(this.externalProductId);
            this.hasNextOrPreviousProduct(currentIndex);
        }
        this.isLoading = true;
        this.getSeoProduct(this.externalProductId);
        this.getCurrentProduct(this.externalProductId);
    }
    InitializeProductsData() {
        this.seoProduct = new _shared_models_optimizeProduct_OptimizeProduct__WEBPACK_IMPORTED_MODULE_4__["OptimizeProduct"]("", 0, "", "", "");
        this.currentProduct = new _shared_models_optimizeProduct_OptimizeProduct__WEBPACK_IMPORTED_MODULE_4__["OptimizeProduct"]("", 0, "", "", "");
    }
    getSeoProduct(externalProductId) {
        this.seoService.getSeoProduct(externalProductId).subscribe(product => {
            if (product) {
                if ("ProductThemes" in product) {
                    this.hasProductThemes = true;
                }
                this.hasSeoProductData = true;
                this.seoProduct = product;
                this.loadSeoProduct();
            }
            else {
                this.categoryService.setCategories(null);
                this.hasSeoProductData = false;
            }
        });
    }
    getCurrentProduct(externalProductId) {
        this.seoService.getCurrentProduct(externalProductId, this.supplier.CompanyId).subscribe(product => {
            if (product) {
                let filteredProduct = this.searchProducts.filter(function (product) {
                    return product.ExternalProductId == externalProductId;
                });
                if ("ProductThemes" in product) {
                    this.hasProductThemes = true;
                }
                product.PrimaryImageUrl = filteredProduct[0].PrimaryImageUrl;
                this.currentProduct = product;
                if (!this.hasSeoProductData) {
                    this.currentProduct.SEOStatus = this.seoStausEnum.REDY;
                    this.seoProduct = new _shared_models_optimizeProduct_OptimizeProduct__WEBPACK_IMPORTED_MODULE_4__["OptimizeProduct"](product.ExternalProductId, product.CompanyId, product.Name, product.Description, product.Summary);
                    this.seoProduct.ProductCategories = this.currentProduct.ProductCategories;
                    this.loadSeoProduct();
                }
                else {
                    this.currentProduct.SEOStatus = this.seoStausEnum.IPRS;
                }
                this.loadProductCategories(this.currentProduct);
                this.loadAllProductKeywords(product.ProductKeywords);
                this.isLoading = false;
            }
        });
    }
    loadSeoProduct() {
        if (!this.hasSeoProductData) {
            this.seoProduct.SeoKeywords = this.currentProduct.ProductKeywords.filter(function (keyword) {
                return keyword.Type == _shared_models_optimizeProduct_EnumKeywordType__WEBPACK_IMPORTED_MODULE_13__["EnumKeywordType"].SEO;
            }).map((keywords) => keywords.Value);
        }
        this.loadProductCategories(this.seoProduct);
        if (this.seoProduct.ProductCategories.length > 0) {
            this.seoProduct.ProductCategories = this.seoProduct.ProductCategories.filter(function (category) {
                return category.Type !== _shared_models_optimizeProduct_EnumCategoryType__WEBPACK_IMPORTED_MODULE_14__["EnumCategoryType"].AD;
            });
            for (var i = 0; i < this.seoProduct.ProductCategories.length; i++) {
                let selectedProductCategory = this.seoProduct.ProductCategories[i];
                let index = this.productCategories.findIndex(x => x.Value.toUpperCase() == selectedProductCategory.Value.toUpperCase());
                let productCategory = this.productCategories[index];
                productCategory.IsSelected = true;
                productCategory.Type = selectedProductCategory.Type;
            }
            this.categoryService.setCategories(this.seoProduct.ProductCategories);
        }
    }
    loadProductCategories(product) {
        if (product.ProductCategories.length > 0) {
            product.ProductCategories = product.ProductCategories.sort(function (a, b) {
                var aType = a.Type;
                var bType = b.Type;
                var aValue = a.Value;
                var bValue = b.Value;
                if (aType == bType) {
                    return (aValue < bValue) ? -1 : (aValue > bValue) ? 1 : 0;
                }
                else {
                    return (bType < aType) ? -1 : 1;
                }
            });
        }
    }
    loadAllProductKeywords(keywords) {
        this.productKeywords = null;
        this.seoKeywords = null;
        this.adKeywords = null;
        if (keywords.length > 0) {
            this.productKeywords = keywords.filter(function (keyword) {
                return keyword.Type == _shared_models_optimizeProduct_EnumKeywordType__WEBPACK_IMPORTED_MODULE_13__["EnumKeywordType"].PRODUCT;
            }).map((keywords) => keywords.Value).toString();
            this.seoKeywords = keywords.filter(function (keyword) {
                return keyword.Type == _shared_models_optimizeProduct_EnumKeywordType__WEBPACK_IMPORTED_MODULE_13__["EnumKeywordType"].SEO;
            }).map((keywords) => keywords.Value).toString();
            this.adKeywords = keywords.filter(function (keyword) {
                return keyword.Type == _shared_models_optimizeProduct_EnumKeywordType__WEBPACK_IMPORTED_MODULE_13__["EnumKeywordType"].AD;
            }).map((keywords) => keywords.Value).toString();
        }
    }
    getNextOrPreviousProduct(isNextProduct) {
        let currentIndex = this.allExternalProductIds.indexOf(this.externalProductId);
        if (isNextProduct) {
            this.hasNextOrPreviousProduct(currentIndex + 1);
            this.externalProductId = this.allExternalProductIds[currentIndex + 1];
        }
        else {
            this.hasNextOrPreviousProduct(currentIndex - 1);
            this.externalProductId = this.allExternalProductIds[currentIndex - 1];
        }
        this.populateProductsData();
        this.router.navigate(['/optimizeProduct']);
    }
    hasNextOrPreviousProduct(index) {
        this.hasPreviousProduct = false;
        this.hasNextProduct = false;
        this.isNextOrPreviousClick = true;
        if (this.allExternalProductIds[index - 1]) {
            this.hasPreviousProduct = true;
        }
        if (this.allExternalProductIds[index + 1]) {
            this.hasNextProduct = true;
        }
    }
    getAllCategories() {
        this.seoService.getAllCategories().subscribe(categories => {
            if (categories) {
                this.productCategories = categories.categories.map((category) => new _shared_models_optimizeProduct_ProductCategory__WEBPACK_IMPORTED_MODULE_5__["ProductCategory"](category));
            }
        });
    }
    getAllThemes() {
        this.seoService.getAllThemes().subscribe(response => {
            if (response) {
                this.themes = response.themes;
            }
        });
    }
    openProductCategories() {
        let options = { backdrop: 'static', size: 'lg', scrollable: true, centered: true };
        const productCategoryModal = this.modalService.open(_modals_product_category_modal_product_category_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProductCategoryModalComponent"], options);
        productCategoryModal.componentInstance.inputProductCategories = this.productCategories;
        productCategoryModal.result.then((result) => {
            if (result === 'success') {
                this.seoProduct.ProductCategories = this.categoryService.getCategories();
            }
        }).catch(exc => { });
    }
    removeCategory(categoryCode) {
        this.selectedCategories = this.categoryService.getCategories();
        if (this.selectedCategories.find(x => x.Value == categoryCode)) {
            let selectedCategoryIndex = this.selectedCategories.findIndex(x => x.Value == categoryCode);
            this.selectedCategories.splice(selectedCategoryIndex, 1);
            if (this.productCategories.find(x => x.Value == categoryCode)) {
                let categoryIndex = this.productCategories.findIndex(x => x.Value == categoryCode);
                this.productCategories[categoryIndex].IsSelected = false;
            }
            this.categoryService.setCategories(this.selectedCategories);
        }
    }
    cancelItem(theme, isKeyword) {
        if (isKeyword) {
            for (var i = 0; i < this.seoProduct.SeoKeywords.length; i++) {
                if (this.seoProduct.SeoKeywords[i] === theme) {
                    this.seoProduct.SeoKeywords.splice(i, 1);
                    i--;
                }
            }
        }
        else {
            for (var i = 0; i < this.seoProduct.ProductThemes.length; i++) {
                if (this.seoProduct.ProductThemes[i] === theme) {
                    this.seoProduct.ProductThemes.splice(i, 1);
                    i--;
                }
            }
        }
    }
    enterKeyword(seoKewords) {
        let seoKeywordArray = seoKewords.split(',');
        seoKeywordArray.forEach((keyword) => (this.seoProduct.SeoKeywords.push(keyword)));
        this.seoKeyword = "";
    }
    openClearAll(isClearKeyword) {
        let options = { backdrop: 'static', size: 'lg', scrollable: true, centered: true };
        const clearAllModal = this.modalService.open(_modals_clear_all_modal_clear_all_modal_component__WEBPACK_IMPORTED_MODULE_11__["ClearAllModalComponent"], options);
        const themeTitle = "Delete All Themes";
        const keywordTitle = "Delete All Keywords";
        const themeMessage = "Do you want to delete all themes?";
        const keywordMessage = "Do you wish to delete all SEO keywords?";
        if (isClearKeyword) {
            clearAllModal.componentInstance.title = keywordTitle;
            clearAllModal.componentInstance.message = keywordMessage;
        }
        else {
            clearAllModal.componentInstance.title = themeTitle;
            clearAllModal.componentInstance.message = themeMessage;
        }
        clearAllModal.result.then((result) => {
            if (result === 'clear') {
                if (isClearKeyword) {
                    this.seoProduct.SeoKeywords = [];
                }
                else {
                    this.seoProduct.ProductThemes = [];
                }
            }
        }).catch(exc => { });
    }
    //https://stackoverflow.com/questions/40503667/how-to-show-a-loader-for-3-sec-and-hide-in-angular-2
    //http://jsfiddle.net/SUBnz/1/
    //for implementing save successfully blur message
    saveSeoProduct() {
        this.isLoading = true;
        this.seoService.saveSeoProduct(this.seoProduct, !this.hasSeoProductData).subscribe(saved => {
            if (saved) {
                this.isLoading = false;
            }
        });
    }
    onClick() {
        this.currentProduct.SEOStatus = this.seoStausEnum.IPRS;
    }
    themeSelected($event) {
        this.seoProduct.ProductThemes.push($event.item);
    }
};
ProductOptimizationComponent.ctorParameters = () => [
    { type: _seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _shared_services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"] },
    { type: _shared_services_supplier_service__WEBPACK_IMPORTED_MODULE_10__["SupplierService"] }
];
ProductOptimizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-optimization',
        template: __webpack_require__(/*! raw-loader!./product-optimization.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-optimization/product-optimization.component.html"),
        styles: [__webpack_require__(/*! ./product-optimization.component.css */ "./src/app/product-optimization/product-optimization.component.css")]
    })
], ProductOptimizationComponent);



/***/ }),

/***/ "./src/app/search-product/search-product.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-product/search-product.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n    \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1wcm9kdWN0L3NlYXJjaC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/search-product/search-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-product/search-product.component.ts ***!
  \************************************************************/
/*! exports provided: SearchProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProductComponent", function() { return SearchProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seo.service */ "./src/app/seo.service.ts");
/* harmony import */ var _shared_models_searchProduct_SearchProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/searchProduct/SearchProduct */ "./src/app/shared/models/searchProduct/SearchProduct.ts");
/* harmony import */ var _shared_models_searchProduct_SearchFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/searchProduct/SearchFilter */ "./src/app/shared/models/searchProduct/SearchFilter.ts");
/* harmony import */ var _shared_models_searchProduct_EnumSeoStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/models/searchProduct/EnumSeoStatus */ "./src/app/shared/models/searchProduct/EnumSeoStatus.ts");
/* harmony import */ var _shared_models_searchProduct_EnumProductStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/models/searchProduct/EnumProductStatus */ "./src/app/shared/models/searchProduct/EnumProductStatus.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modals_bulk_edit_modal_bulk_edit_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/bulk-edit-modal/bulk-edit-modal.component */ "./src/app/modals/bulk-edit-modal/bulk-edit-modal.component.ts");
/* harmony import */ var _modals_email_supplier_modal_email_supplier_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/email-supplier-modal/email-supplier-modal.component */ "./src/app/modals/email-supplier-modal/email-supplier-modal.component.ts");
/* harmony import */ var _shared_services_supplier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/supplier.service */ "./src/app/shared/services/supplier.service.ts");
/* harmony import */ var _shared_models_searchProduct_SearchFilterParam__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/models/searchProduct/SearchFilterParam */ "./src/app/shared/models/searchProduct/SearchFilterParam.ts");













let SearchProductComponent = class SearchProductComponent {
    constructor(_SeoService, modalService, router, supplierService) {
        this._SeoService = _SeoService;
        this.modalService = modalService;
        this.router = router;
        this.supplierService = supplierService;
        this.products = [];
        this.objSearchFilter = [];
        this.selectedFacetTerms = [];
        this.seoStatusShowAll = false;
        this.filterParam = [];
        this.currPage = 0;
        this.isLoading = false;
        this.showhideSearch = false;
        this.totalCount = 0;
        this.isExactMatch = false;
        this.showAll_seoStatus = false;
        this.seoStausEnum = _shared_models_searchProduct_EnumSeoStatus__WEBPACK_IMPORTED_MODULE_6__["EnumSeoStatus"];
        this.productStatusEnum = _shared_models_searchProduct_EnumProductStatus__WEBPACK_IMPORTED_MODULE_7__["EnumProductStatus"];
        this.isSelectAll = false;
        this.noProductsFound = false;
        this.sortBy = 'Last Updated';
    }
    ngOnInit() {
        if (this.supplierService.getSupplier()) {
            this.supplier = this.supplierService.getSupplier();
            this.getSupplierProducts(this.supplier.CompanyId);
        }
        else {
            this.router.navigate(['/searchSupplier']);
        }
    }
    loadProducts(products) {
        if (products.length) {
            this.products = products.map((product) => new _shared_models_searchProduct_SearchProduct__WEBPACK_IMPORTED_MODULE_4__["SearchProduct"](product));
            this.noProductsFound = false;
        }
        else
            this.noProductsFound = true;
    }
    loadFilters(filters) {
        if (filters.length) {
            this.objSearchFilter = filters.map((x) => new _shared_models_searchProduct_SearchFilter__WEBPACK_IMPORTED_MODULE_5__["SearchFilter"](x.Facet, x.Terms));
        }
    }
    getSupplierProducts(companyId, searchText = '', filters = null, sortBy = null, offset = 0) {
        this.showLoader(true);
        if (offset == 0)
            this.currPage = 1;
        this._SeoService.getSuplierProducts(companyId, searchText, filters, sortBy, offset).subscribe(data => {
            if (data) {
                this.isSelectAll = false;
                this.loadProducts(data.Products);
                this.loadFilters(data.Filters);
                this.totalCount = data.TotalCount;
            }
            this.showLoader(false);
        });
    }
    navigatePage(page) {
        this.getSupplierProducts(this.supplier.CompanyId, '', this.filterParam, this.sortByOptions, page.startIndex ? page.startIndex : 0);
        this.currPage = +page.currentPage;
    }
    onSelectAllProducts(event) {
        this.products.forEach((x) => x.IsSelected = this.isSelectAll);
    }
    onSelectProduct(product) {
        if (this.isSelectAll)
            this.isSelectAll = false;
        else {
            if (!this.products.find(item => item.IsSelected == false)) {
                this.isSelectAll = true;
            }
        }
    }
    searchClick(arg) {
        if (arg) {
            this.showhideSearch = true;
            this.searchtxt = arg;
            this.mdlsearch = '';
            this.filterParam = [];
            this.selectedFacetTerms = [];
            if (this.isExactMatch)
                this.filterParam.push(new _shared_models_searchProduct_SearchFilterParam__WEBPACK_IMPORTED_MODULE_12__["SearchFilterParam"]("SearchTerm", '"' + this.searchtxt + '"'));
            else
                this.filterParam.push(new _shared_models_searchProduct_SearchFilterParam__WEBPACK_IMPORTED_MODULE_12__["SearchFilterParam"]("SearchTerm", this.searchtxt));
            this.applyFilter();
        }
    }
    cancelSearch() {
        this.showhideSearch = false;
        this.searchtxt = '';
        this.mdlsearch = '';
        this.filterParam.splice(this.filterParam.findIndex(item => item.FacetName === "SearchTerm"), 1);
        this.applyFilter();
    }
    cancelItem(objFaceterm) {
        if (this.selectedFacetTerms && this.selectedFacetTerms.length > 0) {
            if (this.selectedFacetTerms.filter(item => item.ParentTerm === objFaceterm.Term).length > 1) {
                for (var i = 0; i < this.selectedFacetTerms.length; i++) {
                    if (this.selectedFacetTerms[i].ParentTerm === objFaceterm.Term) {
                        this.selectedFacetTerms.splice(i, 1);
                        i--;
                    }
                }
                this.filterParam.splice(this.filterParam.findIndex(item => item.SearchTerm === objFaceterm.ParentTerm), 1);
                this.applyFilter();
            }
            else if (this.selectedFacetTerms.some(element => element.Term.includes(objFaceterm.Term))) {
                this.selectedFacetTerms.splice(this.selectedFacetTerms.indexOf(objFaceterm), 1);
                if (this.filterParam.some(item => item.SearchTerm === objFaceterm.ParentTerm && item.ChildTerm === objFaceterm.Term)) {
                    var facetName = this.filterParam.find(item => item.SearchTerm === objFaceterm.ParentTerm && item.ChildTerm === objFaceterm.Term).FacetName;
                    this.filterParam.splice(this.filterParam.findIndex(item => item.SearchTerm === objFaceterm.ParentTerm), 1);
                    this.filterParam.push(new _shared_models_searchProduct_SearchFilterParam__WEBPACK_IMPORTED_MODULE_12__["SearchFilterParam"](facetName, objFaceterm.ParentTerm));
                }
                else
                    this.filterParam.splice(this.filterParam.findIndex(item => item.SearchTerm === objFaceterm.Term), 1);
                this.applyFilter();
            }
        }
    }
    facetTermClick(facet, objFaceterm) {
        if (this.selectedFacetTerms && this.selectedFacetTerms.length > 0) {
            if (this.selectedFacetTerms.some(element => element.ParentTerm === objFaceterm.ParentTerm)) {
                this.selectedFacetTerms.push(objFaceterm);
                this.filterParam.splice(this.filterParam.findIndex(item => item.SearchTerm === objFaceterm.ParentTerm), 1);
                this.filterParam.push(new _shared_models_searchProduct_SearchFilterParam__WEBPACK_IMPORTED_MODULE_12__["SearchFilterParam"](facet, objFaceterm.ParentTerm, objFaceterm.Term));
            }
            else {
                this.selectedFacetTerms.push(objFaceterm);
                this.filterParam.push(new _shared_models_searchProduct_SearchFilterParam__WEBPACK_IMPORTED_MODULE_12__["SearchFilterParam"](facet, objFaceterm.Term));
            }
        }
        else {
            this.selectedFacetTerms.push(objFaceterm);
            this.filterParam.push(new _shared_models_searchProduct_SearchFilterParam__WEBPACK_IMPORTED_MODULE_12__["SearchFilterParam"](facet, objFaceterm.Term));
        }
        this.applyFilter();
    }
    openBulkEdit() {
        let options = { backdrop: 'static', size: 'lg' };
        this.modalService.open(_modals_bulk_edit_modal_bulk_edit_modal_component__WEBPACK_IMPORTED_MODULE_9__["BulkEditModalComponent"], options);
    }
    openEmailSupplier() {
        let options = { backdrop: 'static', size: 'xl', scrollable: true };
        const modalRef = this.modalService.open(_modals_email_supplier_modal_email_supplier_modal_component__WEBPACK_IMPORTED_MODULE_10__["EmailSupplierModalComponent"], options);
        modalRef.componentInstance.supplier = this.supplier;
    }
    applyFilter() {
        this.getSupplierProducts(this.supplier.CompanyId, '', this.filterParam, this.sortByOptions, 0);
    }
    toggleSee(filter) {
        filter.SeeAll = !filter.SeeAll;
    }
    toggleSEOStatus(seeAll) {
        this.seoStatusShowAll = !seeAll;
    }
    changeSort(sortBy) {
        this.sortBy = sortBy;
        this.sortByOptions = [];
        this.sortByOptions.push(this.sortBy);
        this.applyFilter();
    }
    clearAll() {
        this.showhideSearch = false;
        this.searchtxt = '';
        this.mdlsearch = '';
        this.selectedFacetTerms = [];
        this.filterParam = [];
        this.sortBy = 'Last Updated';
        this.sortByOptions = [];
        this.applyFilter();
    }
    showLoader(show) {
        this.isLoading = show;
    }
    viewProduct(externalProductId) {
        localStorage.setItem('selectedExternalProductId', externalProductId);
        localStorage.setItem('searchProducts', JSON.stringify(this.products));
        this.router.navigate(['/optimizeProduct']);
    }
};
SearchProductComponent.ctorParameters = () => [
    { type: _seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_supplier_service__WEBPACK_IMPORTED_MODULE_11__["SupplierService"] }
];
SearchProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-product',
        template: __webpack_require__(/*! raw-loader!./search-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/search-product/search-product.component.html"),
        styles: [__webpack_require__(/*! ./search-product.component.css */ "./src/app/search-product/search-product.component.css")]
    })
], SearchProductComponent);



/***/ }),

/***/ "./src/app/search-supplier/search-supplier.component.css":
/*!***************************************************************!*\
  !*** ./src/app/search-supplier/search-supplier.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1zdXBwbGllci9zZWFyY2gtc3VwcGxpZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search-supplier/search-supplier.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/search-supplier/search-supplier.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchSupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSupplierComponent", function() { return SearchSupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../seo.service */ "./src/app/seo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modals_email_supplier_modal_email_supplier_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/email-supplier-modal/email-supplier-modal.component */ "./src/app/modals/email-supplier-modal/email-supplier-modal.component.ts");
/* harmony import */ var _shared_services_supplier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/supplier.service */ "./src/app/shared/services/supplier.service.ts");







let SearchSupplierComponent = class SearchSupplierComponent {
    constructor(seoService, router, modalService, supplierService) {
        this.seoService = seoService;
        this.router = router;
        this.modalService = modalService;
        this.supplierService = supplierService;
        this.suppliers = [];
        this.searchText = '';
        this.isSearchPerformed = false;
        this.isLoading = false;
        this.noSearchResult = false;
    }
    ngOnInit() { }
    searchSuppliers(searchSupplierForm) {
        this.searchSupplierFrm = searchSupplierForm;
        this.isSearchPerformed = false;
        this.noSearchResult = false;
        this.showLoader(true);
        if (this.searchSupplierFrm.valid) {
            this.seoService.getSuppliers(this.searchText.trim()).subscribe(suppliers => {
                if (suppliers.length > 0) {
                    this.suppliers = suppliers;
                }
                else {
                    this.noSearchResult = true;
                    this.suppliers = null;
                }
                this.showLoader(false);
            });
        }
        else {
            this.isSearchPerformed = true;
            this.showLoader(false);
            this.suppliers = null;
        }
    }
    viewProducts(supplier) {
        this.supplierService.setSupplier(supplier);
        this.router.navigate(['/searchProduct']);
    }
    showLoader(show) {
        this.isLoading = show;
    }
    emailSupplier(supplier) {
        if (supplier) {
            let options = { backdrop: 'static', size: 'xl', scrollable: true };
            const modalRef = this.modalService.open(_modals_email_supplier_modal_email_supplier_modal_component__WEBPACK_IMPORTED_MODULE_5__["EmailSupplierModalComponent"], options);
            modalRef.componentInstance.supplier = supplier;
        }
    }
};
SearchSupplierComponent.ctorParameters = () => [
    { type: _seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _shared_services_supplier_service__WEBPACK_IMPORTED_MODULE_6__["SupplierService"] }
];
SearchSupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-supplier',
        template: __webpack_require__(/*! raw-loader!./search-supplier.component.html */ "./node_modules/raw-loader/index.js!./src/app/search-supplier/search-supplier.component.html"),
        styles: [__webpack_require__(/*! ./search-supplier.component.css */ "./src/app/search-supplier/search-supplier.component.css")]
    })
], SearchSupplierComponent);



/***/ }),

/***/ "./src/app/seo.service.ts":
/*!********************************!*\
  !*** ./src/app/seo.service.ts ***!
  \********************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






let SeoService = class SeoService {
    constructor(http) {
        this.http = http;
        this.loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + 'login';
        this.supplierUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + 'Companies';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     */
    handleError(operation = 'operation') {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            //console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.Message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
        };
    }
    /** Log a SeoService message with the MessageService */
    log(message) {
        //console.log(`SeoService: ${message}`);
    }
    getSuplierProducts(companyId, searchText, filters = null, sortBy = [], offset = 0, limit = 20) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("companyid", companyId.toString())
            .set("offset", offset.toString())
            .set("limit", limit.toString());
        if (searchText)
            params = params.append("searchterm", searchText);
        if (filters && filters.length > 0)
            params = params.append("filters", JSON.stringify(filters));
        if (sortBy && sortBy.length > 0)
            params = params.append("SortBy", JSON.stringify(sortBy));
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "SEOproducts", { params });
    }
    ;
    loginSeo(seo) {
        return this.http.post(this.loginUrl, seo, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((seo) => this.log(`Login with username=${seo.Username}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('loginSeo')));
    }
    getSuppliers(searchText) {
        let filters = [];
        filters.push({ searchterm: searchText });
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("filters", JSON.stringify(filters));
        return this.http
            .get(this.supplierUrl, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return response.map(item => item.Results)[0];
        }));
    }
    getCurrentProduct(externalProductId, companyId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("companyId", companyId.toString());
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "SEOproducts/" + externalProductId, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return response;
        }));
    }
    getSeoProduct(externalProductId) {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].seoBaseUrl + "Product/" + externalProductId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return response;
        }));
    }
    saveSeoProduct(seoProduct, isNewProduct) {
        if (isNewProduct) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].seoBaseUrl + "Product", seoProduct, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((product) => this.log(`Insert product with ExternalProductId=${product.ExternalProductId}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('insertProduct')));
        }
        else {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].seoBaseUrl + "Product", seoProduct, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((product) => this.log(`Update product with ExternalProductId=${product.ExternalProductId}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateProduct')));
        }
    }
    getAllCategories() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "lookup/categoriesList")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return response;
        }));
    }
    getAllThemes() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "lookup/themes")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return response;
        }));
    }
};
SeoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], SeoService);



/***/ }),

/***/ "./src/app/shared/auto-focus/auto-focus.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/auto-focus/auto-focus.directive.ts ***!
  \***********************************************************/
/*! exports provided: AutoFocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoFocusDirective", function() { return AutoFocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AutoFocusDirective = class AutoFocusDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.el.nativeElement.focus();
        }, 500);
    }
};
AutoFocusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AutoFocusDirective.prototype, "appAutoFocus", void 0);
AutoFocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[autoFocus]'
    })
], AutoFocusDirective);



/***/ }),

/***/ "./src/app/shared/digit-only/digit-only.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/digit-only/digit-only.directive.ts ***!
  \***********************************************************/
/*! exports provided: DigitOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitOnlyDirective", function() { return DigitOnlyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DigitOnlyDirective = class DigitOnlyDirective {
    constructor(el) {
        this.el = el;
        this.decimalCounter = 0;
        this.navigationKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'Clear',
            'Copy',
            'Paste'
        ];
        this.decimal = false;
        this.inputElement = el.nativeElement;
    }
    onKeyDown(e) {
        if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) || // Allow: Cmd+X (Mac)
            (this.decimal && e.key === '.' && this.decimalCounter < 1) // Allow: only one decimal point
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if (e.key === ' ' || isNaN(Number(e.key))) {
            e.preventDefault();
        }
    }
    onKeyUp(e) {
        if (!this.decimal) {
            return;
        }
        else {
            this.decimalCounter = this.el.nativeElement.value.split('.').length - 1;
        }
    }
    onPaste(event) {
        event.preventDefault();
        const pastedInput = event.clipboardData.getData('text/plain');
        if (!this.decimal) {
            document.execCommand('insertText', false, pastedInput.replace(/[^0-9]/g, ''));
        }
        else if (this.isValidDecimal(pastedInput)) {
            document.execCommand('insertText', false, pastedInput.replace(/[^0-9.]/g, ''));
        }
    }
    onDrop(event) {
        event.preventDefault();
        const textData = event.dataTransfer.getData('text');
        this.inputElement.focus();
        if (!this.decimal) {
            document.execCommand('insertText', false, textData.replace(/[^0-9]/g, ''));
        }
        else if (this.isValidDecimal(textData)) {
            document.execCommand('insertText', false, textData.replace(/[^0-9.]/g, ''));
        }
    }
    isValidDecimal(string) {
        return string.split('.').length <= 2;
    }
};
DigitOnlyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DigitOnlyDirective.prototype, "decimal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], DigitOnlyDirective.prototype, "onKeyDown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup', ['$event'])
], DigitOnlyDirective.prototype, "onKeyUp", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('paste', ['$event'])
], DigitOnlyDirective.prototype, "onPaste", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event'])
], DigitOnlyDirective.prototype, "onDrop", null);
DigitOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[digitOnly]'
    })
], DigitOnlyDirective);



/***/ }),

/***/ "./src/app/shared/helpers/StorageHelper.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/helpers/StorageHelper.ts ***!
  \*************************************************/
/*! exports provided: StorageHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageHelper", function() { return StorageHelper; });
// module with classes and logic for working with local storage in browsers via JavaScript
// see also: http://professorweb.ru/my/html/html5/level5/5_1.php
// class for working with local storage in browser (common that can use other classes for store some data)
class StorageHelper {
    constructor() {
        this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
    }
    // add value to storage
    add(key, item) {
        if (this.localStorageSupported) {
            localStorage.setItem(key, item);
        }
    }
    // get all values from storage (all items)
    // getAllItems(): Array<StorageItem> {
    //     var list = new Array<StorageItem>();
    //     for (var i = 0; i < localStorage.length; i++) {
    //         var key = localStorage.key(i);
    //         var value = localStorage.getItem(key);
    //         list.push(new StorageItem({
    //             key: key,
    //             value: value
    //         }));
    //     }
    //     return list;
    // }
    // get only all values from localStorage
    getAllValues() {
        var list = new Array();
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            list.push(value);
        }
        return list;
    }
    // get one item by key from storage
    get(key) {
        if (this.localStorageSupported) {
            var item = localStorage.getItem(key);
            return item;
        }
        else {
            return null;
        }
    }
    // remove value from storage
    remove(key) {
        if (this.localStorageSupported) {
            localStorage.removeItem(key);
        }
    }
    // clear storage (remove all items from it)
    clear() {
        if (this.localStorageSupported) {
            localStorage.clear();
        }
    }
}


/***/ }),

/***/ "./src/app/shared/models/emailSupplier/EmailSupplier.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/models/emailSupplier/EmailSupplier.ts ***!
  \**************************************************************/
/*! exports provided: EmailSupplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSupplier", function() { return EmailSupplier; });
class EmailSupplier {
    constructor(supplier) {
        this.To = supplier.EmailAddress;
    }
    ;
}
EmailSupplier.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/shared/models/optimizeProduct/EnumCategoryType.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/models/optimizeProduct/EnumCategoryType.ts ***!
  \*******************************************************************/
/*! exports provided: EnumCategoryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumCategoryType", function() { return EnumCategoryType; });
var EnumCategoryType;
(function (EnumCategoryType) {
    EnumCategoryType["PRODUCT"] = "Product";
    EnumCategoryType["EIT"] = "EIT";
    EnumCategoryType["AD"] = "AD";
})(EnumCategoryType || (EnumCategoryType = {}));
;


/***/ }),

/***/ "./src/app/shared/models/optimizeProduct/EnumKeywordType.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/models/optimizeProduct/EnumKeywordType.ts ***!
  \******************************************************************/
/*! exports provided: EnumKeywordType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumKeywordType", function() { return EnumKeywordType; });
var EnumKeywordType;
(function (EnumKeywordType) {
    EnumKeywordType["PRODUCT"] = "Product";
    EnumKeywordType["SEO"] = "SEO";
    EnumKeywordType["AD"] = "AD";
})(EnumKeywordType || (EnumKeywordType = {}));
;


/***/ }),

/***/ "./src/app/shared/models/optimizeProduct/OptimizeProduct.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/models/optimizeProduct/OptimizeProduct.ts ***!
  \******************************************************************/
/*! exports provided: OptimizeProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizeProduct", function() { return OptimizeProduct; });
class OptimizeProduct {
    constructor(externalProductId, companyId, name, description, summary) {
        this.ProductThemes = [];
        this.SeoKeywords = [];
        this.PrimaryImageUrl = "";
        this.ExternalProductId = externalProductId;
        this.CompanyId = companyId;
        this.Name = name;
        this.Description = description;
        this.Summary = summary;
    }
    ;
}
OptimizeProduct.ctorParameters = () => [
    { type: String },
    { type: Number },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/shared/models/optimizeProduct/ProductCategory.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/models/optimizeProduct/ProductCategory.ts ***!
  \******************************************************************/
/*! exports provided: ProductCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategory", function() { return ProductCategory; });
class ProductCategory {
    constructor(category) {
        this.IsSelected = false;
        this.IsDisabled = false;
        this.Value = category;
        this.Type = "";
    }
    ;
}
ProductCategory.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/shared/models/searchProduct/EnumProductStatus.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/models/searchProduct/EnumProductStatus.ts ***!
  \******************************************************************/
/*! exports provided: EnumProductStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumProductStatus", function() { return EnumProductStatus; });
var EnumProductStatus;
(function (EnumProductStatus) {
    EnumProductStatus["INPR"] = "In Progress";
    EnumProductStatus["ACTV"] = "Active";
    EnumProductStatus["INCT"] = "Inactive";
})(EnumProductStatus || (EnumProductStatus = {}));
;


/***/ }),

/***/ "./src/app/shared/models/searchProduct/EnumSeoStatus.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/models/searchProduct/EnumSeoStatus.ts ***!
  \**************************************************************/
/*! exports provided: EnumSeoStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumSeoStatus", function() { return EnumSeoStatus; });
var EnumSeoStatus;
(function (EnumSeoStatus) {
    EnumSeoStatus["REDY"] = "Ready for SEO";
    EnumSeoStatus["IPRS"] = "In Progress";
    EnumSeoStatus["SEOD"] = "SEO Done";
    EnumSeoStatus["NAPL"] = "Needs Approval";
    EnumSeoStatus["APPD"] = "Approved";
    EnumSeoStatus["REVN"] = "Revisions";
})(EnumSeoStatus || (EnumSeoStatus = {}));
;


/***/ }),

/***/ "./src/app/shared/models/searchProduct/FacetTerms.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/models/searchProduct/FacetTerms.ts ***!
  \***********************************************************/
/*! exports provided: FacetTerms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetTerms", function() { return FacetTerms; });
class FacetTerms {
    constructor(count, term, parentTerm) {
        this.Count = count;
        this.Term = term;
        this.ParentTerm = parentTerm;
    }
}
FacetTerms.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/shared/models/searchProduct/SearchFilter.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/models/searchProduct/SearchFilter.ts ***!
  \*************************************************************/
/*! exports provided: SearchFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilter", function() { return SearchFilter; });
/* harmony import */ var _FacetTerms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FacetTerms */ "./src/app/shared/models/searchProduct/FacetTerms.ts");

class SearchFilter {
    constructor(facet, terms) {
        this.SeeAll = false;
        this.Facet = facet;
        this.FacetId = facet.replace(/\s/g, "_");
        this.Terms = terms.map(x => new _FacetTerms__WEBPACK_IMPORTED_MODULE_0__["FacetTerms"](x.Count, x.Term, x.ParentTerm));
    }
}
SearchFilter.ctorParameters = () => [
    { type: String },
    { type: Array }
];


/***/ }),

/***/ "./src/app/shared/models/searchProduct/SearchFilterParam.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/models/searchProduct/SearchFilterParam.ts ***!
  \******************************************************************/
/*! exports provided: SearchFilterParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterParam", function() { return SearchFilterParam; });
class SearchFilterParam {
    constructor(facet, term, child = '') {
        this.FacetName = facet;
        this.SearchTerm = term;
        if (child)
            this.ChildTerm = child;
    }
}
SearchFilterParam.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/shared/models/searchProduct/SearchProduct.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/models/searchProduct/SearchProduct.ts ***!
  \**************************************************************/
/*! exports provided: SearchProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProduct", function() { return SearchProduct; });
class SearchProduct {
    constructor(product) {
        this.IsSelected = false;
        this.SEOStatus = product.SEOStatus;
        this.ProductStatus = product.ProductStatus;
        this.Name = product.Name;
        this.Description = product.Description;
        this.PublishDateUtc = product.PublishDateUtc;
        this.PrimaryImageUrl = product.PrimaryImageUrl;
        this.ExternalProductId = product.ExternalProductId;
        this.LastUpdatedBy = product.LastUpdatedBy;
        this.CanBlkPblsh = product.CanBlkPblsh;
        this.CreateDateUtc = product.CreateDateUtc;
        this.LastUpdateDateUtc = product.LastUpdateDateUtc;
    }
    ;
}
SearchProduct.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/shared/no-whitespace/no-whitespace.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/no-whitespace/no-whitespace.directive.ts ***!
  \*****************************************************************/
/*! exports provided: NoWhitespaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoWhitespaceDirective", function() { return NoWhitespaceDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _no_whitespace_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-whitespace.validator */ "./src/app/shared/no-whitespace/no-whitespace.validator.ts");

var NoWhitespaceDirective_1;



/**
 * This validator works like "required" but it does not allow whitespace either
 *
 * @export
 * @class NoWhitespaceDirective
 * @implements {Validator}
 */
let NoWhitespaceDirective = NoWhitespaceDirective_1 = class NoWhitespaceDirective {
    /**
     * This validator works like "required" but it does not allow whitespace either
     *
     * @export
     * @class NoWhitespaceDirective
     * @implements {Validator}
     */
    constructor() {
        this.valFn = Object(_no_whitespace_validator__WEBPACK_IMPORTED_MODULE_3__["NoWhitespaceValidator"])();
    }
    validate(control) {
        return this.valFn(control);
    }
};
NoWhitespaceDirective = NoWhitespaceDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[noSpaces]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: NoWhitespaceDirective_1, multi: true }]
    })
], NoWhitespaceDirective);



/***/ }),

/***/ "./src/app/shared/no-whitespace/no-whitespace.validator.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/no-whitespace/no-whitespace.validator.ts ***!
  \*****************************************************************/
/*! exports provided: NoWhitespaceValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoWhitespaceValidator", function() { return NoWhitespaceValidator; });
function NoWhitespaceValidator() {
    return (control) => {
        let isWhitespace = (control.value || '').trim().length === 0;
        let isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': 'value is only whitespace' };
    };
}


/***/ }),

/***/ "./src/app/shared/page/page.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/page/page.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlL3BhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/page/page.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/page/page.component.ts ***!
  \***********************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_pager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pager.service */ "./src/app/shared/services/pager.service.ts");



let PageComponent = class PageComponent {
    constructor(_Pager) {
        this._Pager = _Pager;
        this.pager = {};
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.limit = 20;
    }
    ngOnInit() {
        this.setPage(1);
    }
    ngOnChanges() {
        this.setPage(this.currPage);
    }
    setPage(page) {
        this.pager = this._Pager.getPager(this.totalCount, page, this.limit);
        this.totalPages = this.pager.totalPages;
        this.currPage = this.pager.currentPage;
    }
    pageNavigate(pageValue) {
        if (!pageValue)
            pageValue = 0;
        if (pageValue < 1) {
            this.currPage = 1;
        }
        this.pager.currentPage = this.currPage;
        this.setPage(pageValue);
        this.navigate.emit(this.pager);
    }
};
PageComponent.ctorParameters = () => [
    { type: _services_pager_service__WEBPACK_IMPORTED_MODULE_2__["PagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageComponent.prototype, "currPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageComponent.prototype, "totalCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PageComponent.prototype, "navigate", void 0);
PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page',
        template: __webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/page/page.component.html"),
        styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/shared/page/page.component.css")]
    })
], PageComponent);



/***/ }),

/***/ "./src/app/shared/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryService = class CategoryService {
    constructor() { }
    setCategories(productCategories) {
        this._productCategories = productCategories;
    }
    getCategories() {
        return this._productCategories;
    }
};
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/shared/services/pager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/pager.service.ts ***!
  \**************************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagerService = class PagerService {
    constructor() { }
    getPager(totalItems, currentPage = 1, pageSize = 10) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1 && totalPages > 0) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
};
PagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PagerService);



/***/ }),

/***/ "./src/app/shared/services/supplier.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/supplier.service.ts ***!
  \*****************************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_StorageHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/StorageHelper */ "./src/app/shared/helpers/StorageHelper.ts");





let SupplierService = class SupplierService {
    constructor(http) {
        this.http = http;
        this.supplierApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].seoBaseUrl1;
        this.localStorage = new _helpers_StorageHelper__WEBPACK_IMPORTED_MODULE_4__["StorageHelper"]();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    setSupplier(supplier) {
        this._supplier = supplier;
        this.localStorage.add('supplier', JSON.stringify(this._supplier));
    }
    getSupplier() {
        this._supplier = JSON.parse(this.localStorage.get('supplier'));
        return this._supplier;
    }
    sendEmail(email) {
        return this.http.post(this.supplierApiUrl + "/send", email, this.httpOptions);
    }
};
SupplierService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SupplierService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SupplierService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: "https://productservice.stage-asicentral.com/api/v5/",
    mockBaseUrl: "http://www.mocky.io/",
    seoBaseUrl: "http://localhost:54936/api/",
    seoBaseUrl1: "http://localhost:54937/api/supplier"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Repository\mac-pk\products-seo\SEOWorkflow\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map