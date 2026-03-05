import List "mo:core/List";
import Iter "mo:core/Iter";
import Array "mo:core/Array";

actor {
  type AppointmentRequest = {
    patientName : Text;
    phoneNumber : Text;
    skinConcern : Text;
    preferredDate : Text;
  };

  let appointmentRequests = List.empty<AppointmentRequest>();

  public shared ({ caller }) func submitAppointmentRequest(patientName : Text, phoneNumber : Text, skinConcern : Text, preferredDate : Text) : async () {
    let newRequest : AppointmentRequest = {
      patientName;
      phoneNumber;
      skinConcern;
      preferredDate;
    };
    appointmentRequests.add(newRequest);
  };

  public query ({ caller }) func getAllAppointmentRequests() : async [AppointmentRequest] {
    appointmentRequests.toArray();
  };
};
