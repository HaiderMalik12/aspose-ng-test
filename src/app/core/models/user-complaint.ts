import User from './user.model';
import Complaint from './complaint.model';

export default class UserComplaint {
  constructor(public user: User,
              public complaint: Complaint,
              public text: String) {
  }
}
