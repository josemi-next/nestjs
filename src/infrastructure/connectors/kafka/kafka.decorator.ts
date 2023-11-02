export const SUBSCRIBER_FN_REF_MAP = new Map<string, any>();
export const SUBSCRIBER_FIXED_FN_REF_MAP = new Map<string, any>();
export const SUBSCRIBER_OBJ_REF_MAP = new Map<string, any>();

export function SubscribeTo(topicName: string) {
	return (target: any, propertyKey: any, descriptor: any) => {
		const originalMethod = target[propertyKey];
		SUBSCRIBER_FN_REF_MAP.set(topicName, originalMethod);
		return descriptor;
	};
}
