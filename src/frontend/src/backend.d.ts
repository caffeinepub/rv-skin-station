import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AppointmentRequest {
    skinConcern: string;
    preferredDate: string;
    patientName: string;
    phoneNumber: string;
}
export interface backendInterface {
    getAllAppointmentRequests(): Promise<Array<AppointmentRequest>>;
    submitAppointmentRequest(patientName: string, phoneNumber: string, skinConcern: string, preferredDate: string): Promise<void>;
}
