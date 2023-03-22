/* export default interface apiResponse{
    response?: {
        data?: Array<string>;
        failed?: boolean;
        message?: string;
        succeeded?: boolean;
    };
    error?:any;
} */

export default interface apiResponse {
    data?: {
      // this will be included in suggestions so if possible use the format if you know that.
      Succeeded: boolean,
      Data: string,
      Message:string,
      /* result: {
        // this will not give suggestions
        [key: string]: string;
      }; */
    };
    error?: any;
  }