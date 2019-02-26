import gql from 'graphql-tag';

const CREATE_RESERVATIONS = gql`
  mutation CreateReservation($data: ReservationCreateInput!) {
    createReservation(data: $data) {
      id
      hotelName
      name
      departureDate
      arrivalDate
    }
  }
`;
export {CREATE_RESERVATIONS};
