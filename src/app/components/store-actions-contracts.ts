/**
 * This is a pretty straight forward definition of a
 * genericAction type that is combined of the types
 * Type and Payload. So effectively every object with
 * the form of {type, payload} confirms to this type.
 */

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*              TYPES                           */
/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

type Type = {
  readonly type: string;
}

type Payload<T> = {
  readonly payload: T;
}

type Action<T> = Type & Payload<T>;
