import { SyncOutlined } from "@ant-design/icons";

const ForgotnewPasswordForm = ({
  handleSubmit,
  email,
  setEmail,
  newPassword,
  setNewPassword,
  secret,
  setSecret,
  loading,
  page,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">New password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      {page !== "login" && (
        <>
          <div className="form-group">
            <label className="text-muted">Answer your secret question</label>

            <select className="form-control">
              <option>What is your favourite color?</option>
              <option>What is your best friend's name?</option>
              <option>What city were you born?</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Write your answer here"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
        </>
      )}

      <button
        type="submit"
        className="btn btn-block btn-primary"
        disabled={!email || !newPassword || !secret || loading}
      >
        {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
      </button>
    </form>
  );
};

export default ForgotnewPasswordForm;
