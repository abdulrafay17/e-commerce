import db from "@/lib/db";
import bcrypt from 'bcryptjs'

export async function PATCH(req) {
  const data = await req.json();
  console.log(data);

  const profileUpdates = [];
  const profileValues = [];
  let i = 1;

  // profile updates
  if (data.firstname) {
    profileUpdates.push(`first_name = $${i++}`);
    profileValues.push(data.firstname);
  }
  if (data.lastname) {
    profileUpdates.push(`last_name = $${i++}`);
    profileValues.push(data.lastname);
  }
  if (data.email) {
    profileUpdates.push(`email = $${i++}`);
    profileValues.push(data.email);
  }
  if (data.address) {
    profileUpdates.push(`address = $${i++}`);
    profileValues.push(data.address);
  }

  let updatedProfile;
  if (profileUpdates.length > 0) {
    profileValues.push(data.userId);
    const profileQuery = `UPDATE profiles SET ${profileUpdates.join(', ')} WHERE user_id = $${i} RETURNING *`;
    const result = await db.query(profileQuery, profileValues);
    updatedProfile = result.rows[0];
  }

  let updatedUser;
  if (data.newpassword) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.newpassword, salt);

    const userQuery = `UPDATE users SET password = $1 WHERE id = $2 RETURNING *`;
    const result = await db.query(userQuery, [hashedPassword, data.userId]);
    updatedUser = result.rows[0];
  }

  return Response.json({
    success: true,
    profile: updatedProfile,
    user: updatedUser,
    message: "Updated successfully",
  });
}
