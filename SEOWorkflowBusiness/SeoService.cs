using SEOWorkflowDataAccess;
using SEOWorkflowDomain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using static SEOWorkflowDomain.Constants;

namespace SEOWorkflowBusiness
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

        #endregion

        #region methods

        public Product GetSeoProduct(string externalProductId)
        {
            var product = _repository.GetSeoProduct(externalProductId);
            var productCategories = new List<ProductCategory>();

            if (product != null)
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
                product.SEOStatus = FixupSeoStatus(product.SEOStatus);

                if (!string.IsNullOrEmpty(product.Themes))
                {
                    product.ProductThemes = product.Themes.Split(',').ToList();
                }
            }

            return product;
        }

        public int SaveSeoProduct(Product product, bool isNewProduct)
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
            product.Keywords = string.Join(",", product.SeoKeywords);
            product.Themes = (product.ProductThemes != null) ? string.Join(",", product.ProductThemes) : string.Empty;
            product.SEOStatus = GetSEOStatusEnumKey(product.SEOStatus);

            return _repository.SaveSeoProduct(product, isNewProduct);
        }

        private string GetSEOStatusEnumKey(string seoStatus)
        {
            var status = string.Empty;

            switch (seoStatus)
            {
                case SEOStatus.REDY:
                    status = "REDY";
                    break;
                case SEOStatus.IPRS:
                    status = "IPRS";
                    break;
                case SEOStatus.SEOD:
                    status = "SEOD";
                    break;
                case SEOStatus.NAPL:
                    status = "NAPL";
                    break;
                case SEOStatus.APPD:
                    status = "APPD";
                    break;
                case SEOStatus.REVN:
                    status = "REVN";
                    break;
            }

            return status;
        }

        private string FixupSeoStatus(string seoStatus)
        {
            return seoStatus
                .Replace("REDY", Constants.SEOStatus.REDY)
                .Replace("IPRS", Constants.SEOStatus.IPRS)
                .Replace("SEOD", Constants.SEOStatus.SEOD)
                .Replace("NAPL", Constants.SEOStatus.NAPL)
                .Replace("APPD", Constants.SEOStatus.APPD)
                .Replace("APPD", Constants.SEOStatus.APPD)
                .Replace("REVN", Constants.SEOStatus.REVN);
        }

        #endregion
    }
}
