import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
  page,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {page !== "login" && (
        <div className="form-group">
          <label className="text-muted">Your Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
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
        <label className="text-muted">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {page !== "login" && (
        <>
          <div className="form-group">
            <label className="text-muted">Pick a question</label>

            <select className="form-control">
              <option>What is your favourite color?</option>
              <option>What is your best friend's name?</option>
              <option>What city were you born?</option>
            </select>

            <small className="form-text text-muted">
              You can use this to reset your password if forgotten.
            </small>
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
        disabled={
          page === "login"
            ? !email || !password
            : !name || !email || !password || !secret
        }
      >
        {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
      </button>
    </form>
  );
};

export default AuthForm;
