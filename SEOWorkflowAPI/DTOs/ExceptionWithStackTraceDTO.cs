using System.Runtime.Serialization;

namespace SEOWorkflowAPI.DTOs
{
    /// <summary>
    /// Object used to serialize exception information that includes a stack trace in the response.
    /// </summary>
    [DataContract]
    public class ExceptionWithStackTraceDTO
    {
        [DataMember(Order = 1)]
        public string Message { get; set; }

        [DataMember(Order = 2)]
        public string StackTrace { get; set; }

        protected ExceptionWithStackTraceDTO()
        {

        }

        public ExceptionWithStackTraceDTO(string message, string stackTrace)
        {
            this.Message = message;
            this.StackTrace = stackTrace;
        }
    }
}