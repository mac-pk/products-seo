using SEOWorkflowBusiness;
using SEOWorkflowDataAccess;
using StructureMap;
using StructureMap.Web.Pipeline;
using System;
using System.Threading;

namespace SEOWorkflowAPI.DependencyResolution
{
    public static class ObjectFactory
    {
        private static readonly Lazy<Container> ContainerBuilder = new Lazy<Container>(DefaultContainer, LazyThreadSafetyMode.ExecutionAndPublication);

        public static IContainer Container
        {
            get { return ContainerBuilder.Value; }
        }

        private static Container DefaultContainer()
        {
            return CreateContainer();
        }

        public static Container CreateContainer()
        {
            return new Container(x =>
            {
                x.For<ISeoDataConnection>().LifecycleIs<HttpContextLifecycle>().Use<SeoDataConnection>();

                x.For<ISeoConnectionInfo>().Use<SeoConnectionInfo>();
                x.For<IProductService>().Use<ProductService>();
                x.For<IProductRepository>().Use<ProductRepository>();
            });
        }
    }
}