using SEOWorkflowDataAccess;
using SEOWorkflowDomain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static SEOWorkflowDomain.Constants;

namespace SEOWorkflowBusiness
{
    public class ProductService : IProductService
    {
        #region constants

        public const string BeginEntryToken = "~*[\"";
        public const string EntrySplitToken = "\"~*:*~\"";
        public const string EndEntryToken = "\"]*~";
        public const string NewlineToken = "\r\n";

        #endregion

        #region fields

        private readonly IProductRepository _repository;

        #endregion

        #region constructors

        public ProductService(IProductRepository repository)
        {
            _repository = repository;
        }

        #endregion

        #region methods

        public async Task<Product> GetSeoProductAsync(string externalProductId)
        {
            var product = await _repository.GetSeoProductAsync(externalProductId);
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
                        var category = new ProductCategory
                        {
                            Value = categoryName,
                            Type = categoryType,
                            IsSelected = true,
                            IsDisabled = false
                        };

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

        public async Task<int> SaveSeoProductAsync(Product product, bool isNewProduct)
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

            return await _repository.SaveSeoProductAsync(product, isNewProduct);
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
