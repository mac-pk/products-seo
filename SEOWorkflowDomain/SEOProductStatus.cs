using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SEOWorkflowDomain
{
    public class SEOProductStatus
    {
        public int ID { get; set; }
        public int? CompanyId { get; set; }
        public string ExternalProductId { get; set; }
        public string ProductStatus { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public string UpdatedBy { get; set; }
    }
}
