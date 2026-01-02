import { AwsRum, AwsRumConfig } from 'aws-rum-web';

export function initCwr() {
	try {
		const config: AwsRumConfig = {
			sessionSampleRate: 1 ,
			identityPoolId: "eu-central-1:999ed878-9a34-44bb-849b-8dcd5fb4a733" ,
			endpoint: "https://dataplane.rum.eu-central-1.amazonaws.com" ,
			telemetries: ["performance","errors","http", "session"] ,
			allowCookies: false ,
			enableXRay: false ,
			signing: true // If you have a public resource policy and wish to send unsigned requests please set this to false
		};

		const APPLICATION_ID: string = '8b62faa5-c08f-46c3-89a5-21ad3b3bc2d2';
		const APPLICATION_VERSION: string = '1.0.0';
		const APPLICATION_REGION: string = 'eu-central-1';

		return new AwsRum(
			APPLICATION_ID,
			APPLICATION_VERSION,
			APPLICATION_REGION,
			config
		);
	} catch (error) {
		// Ignore errors thrown during CloudWatch RUM web client initialization
	}

	return undefined;
}