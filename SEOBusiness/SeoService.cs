using SEODataAccess;
using SEODomain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SEOBusiness
{
    public class SeoService : ISeoService
    {
        #region constants

        public const string BeginEntryToken = "~*[\"";
        public const string EntrySplitToken = "\"~*:*~\"";
        public const string EndEntryToken = "\"]*~";
        public const string NewlineToken = "\r\n";

        #endregion

        #region fields

        private ISeoRepository _repository;

        #endregion

        #region constructors

        public SeoService(ISeoRepository repository)
        {
            _repository = repository;
        }

        public SeoService()
        {
            _repository = new SeoRepository();
        }

        #endregion

        #region methods
        public bool SaveSeoProduct(Product product, bool isNewProduct)
        {
            var productCategories = new StringBuilder();

            if (product.ProductCategories != null)
            {
                foreach (var category in product.ProductCategories)
                {
                    productCategories.Append(($"{BeginEntryToken}{category.Value}{EntrySplitToken}{category.Type}{EndEntryToken}{NewlineToken}"));
                }
            }

            product.Categories = productCategories.ToString();
            product.Keywords = String.Join(",", product.SeoKeywords);
            product.Themes = String.Join(",", product.ProductThemes);
            product.SEOStatus = GetSEOStatusEnumKey(product.SEOStatus);

           return _repository.SaveSeoProduct(product, isNewProduct);
        }

        private string GetSEOStatusEnumKey(string SEOStatus)
        {
            var status = string.Empty;

            switch (SEOStatus)
            {
                case "Ready for SEO":
                    status = "REDY";
                    break;
                case "In Progress":
                    status = "IPRS";
                    break;
                case "SEO Done":
                    status = "SEOD";
                    break;
                case "Needs Approval":
                    status = "NAPL";
                    break;
                case "Approved":
                    status = "APPD";
                    break;
                case "Revisions":
                    status = "REVN";
                    break;
            }

            return status;
        }

        public Product GetSeoProduct(string externalProductId)
        {
            var product = _repository.GetSeoProduct(externalProductId);
            var productCategories = new List<ProductCategory>();

            if ((product != null) && (!string.IsNullOrEmpty(product.Themes)))
            {
                var s = product.Categories.Split(new[] { BeginEntryToken, EntrySplitToken, EndEntryToken + NewlineToken, EndEntryToken }, StringSplitOptions.RemoveEmptyEntries);

                for (var i = 0; i < s.Length; i += 2)
                {
                    if (s.Length - 1 >= i + 1)
                    {
                        var categoryName = s[i];
                        var categoryType = s[i + 1];
                        var category = new ProductCategory();

                        category.Value = categoryName;
                        category.Type = categoryType;
                        category.IsSelected = true;
                        category.IsDisabled = false;

                        productCategories.Add(category);
                    }
                }

                product.ProductCategories = productCategories;
                product.SeoKeywords = product.Keywords.Split(',').ToList();
                product.ProductThemes = product.Themes.Split(',').ToList();
            }

            return product;
        }

        #endregion
    }
}
