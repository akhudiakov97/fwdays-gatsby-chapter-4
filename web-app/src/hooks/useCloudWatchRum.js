import { AwsRum, AwsRumConfig } from "aws-rum-web";

export const useCloudWatchRum = () => {
  try {
    const config = {
      sessionSampleRate: 0.1,
      endpoint: "https://dataplane.rum.eu-central-1.amazonaws.com",
      telemetries: [],
      allowCookies: false,
      enableXRay: false,
    };

    const APPLICATION_ID = "dc25f894-a92d-4f28-a958-ff50d2acd685";
    const APPLICATION_VERSION = "1.0.0";
    const APPLICATION_REGION = "eu-central-1";

    const awsRum = new AwsRum(
      APPLICATION_ID,
      APPLICATION_VERSION,
      APPLICATION_REGION,
      config
    );
  } catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
  }
};
